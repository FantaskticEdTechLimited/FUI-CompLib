import { useRef } from "react";
import CreatableSelect from "react-select/creatable";
import { FInputSelectProps } from "./types";
import { styles, clearIconContainer } from "./styles";
import React from "react";
import { FJoinClassNames } from "../utils/FJoinClassNames";

/**
 * `<FInputSelect />` is a component to show a button container for options selection.
 *
 * It can also _**input**_ to search for options and create components like `tags`
 * in a `dropdown`, which is different from `<FSelect />`.
 *
 * Reference: https://react-select.com/home
 *
 * Props: `FInputSelectProps`.
 */
export const FInputSelect = <T,>(props: FInputSelectProps<T>) => {
	const {
		isClearable = true,
		isSearchable = true,
		isDisableCreate = true,
		isMulti = false,
		disabled = false,
		isLoading,
		placeholder,
		value,
		onCompareInputValue,
		onSelect,
		onClear,
		onCreate,
		onRemove,
		options,
		getOptionKey,
		getOptionLabel,
		styles: style,
		clearIconClassName,
		menuClassName,
		componentClassName,
		containerClassName,
		contentContainerClassName,
	} = props;

	const selectRef = useRef(null);
	const isArray = Array.isArray(value);
	if ((isArray && !isMulti) || (!isArray && isMulti)) {
		return <div>Data(s) and Multi mismatch</div>;
	}

	const handleCreateAndAutoFocus = async (value: string) => {
		onCreate && (await onCreate(value));
		selectRef.current && (selectRef.current as any).focus();
	};

	return (
		<CreatableSelect
			styles={style}
			className={FJoinClassNames([
				styles.inputSelectContainer,
				containerClassName,
				styles.contentContainer,
				contentContainerClassName,
				styles.menuWrapper,
				menuClassName,
				styles.componentContainer,
				componentClassName,
				clearIconContainer(),
				clearIconClassName,
			])}
			ref={selectRef}
			isMulti={isMulti}
			isLoading={isLoading}
			isDisabled={disabled}
			isClearable={isClearable}
			isSearchable={isSearchable}
			placeholder={placeholder}
			formatOptionLabel={(option) => {
				const isNew = (option as any).__isNew__;
				if (isNew) return (option as any).label;
				return getOptionLabel(option);
			}}
			getOptionValue={(option) => {
				const isNew = (option as any).__isNew__;
				if (isNew) return (option as any).value;
				return getOptionKey(option);
			}}
			onChange={(singleValue, actionMethod) => {
				switch (actionMethod.action) {
					case "clear":
						onClear && onClear();
						break;
					case "select-option":
						isMulti
							? actionMethod.option && onSelect(actionMethod.option)
							: singleValue && onSelect(singleValue as T);
						break;
					case "pop-value":
					case "remove-value":
						actionMethod.removedValue &&
							onRemove &&
							onRemove(actionMethod.removedValue);
						break;
					default:
						break;
				}
			}}
			onCreateOption={(input) => {
				if (!isDisableCreate) handleCreateAndAutoFocus(input);
			}}
			options={options}
			value={value}
			filterOption={(option, value) => {
				// if no input, options will not be filter
				if (!value || value === null) return true;

				// if input = option value, is create new option
				if (!isDisableCreate) {
					const isNew = (option.data as any).__isNew__;
					if (isNew) return true;
				} else {
					const isNew = (option.data as any).__isNew__;
					if (isNew) return false;
				}
				try {
					const match = onCompareInputValue(option.data, value);
					return match;
				} catch (error) {
					console.error("FInputSelect Error: ", error);
				}
				return false;
			}}
		/>
	);
};
