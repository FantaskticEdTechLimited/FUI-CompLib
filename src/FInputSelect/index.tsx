import { useRef } from "react";
import CreatableSelect from "react-select/creatable";
import { FInputSelectProps } from "./types";
import * as styles from "./styles";
import React from "react";

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
export const FInputSelect = <T extends unknown>({
	isClearable = true,
	isSearchable = true,
	isDisableCreate = true,
	isMulti = false,
	disabled = false,
	...props
}: FInputSelectProps<T>) => {
	const selectRef = useRef(null);
	const isArray = Array.isArray(props.value);
	if ((isArray && !isMulti) || (!isArray && isMulti)) {
		return <div>Data(s) and Multi mismatch</div>;
	}

	const handleCreateAndAutoFocus = async (value: string) => {
		props.onCreate && (await props.onCreate(value));
		selectRef.current && (selectRef.current as any).focus();
	};

	return (
		<CreatableSelect
			styles={props.styles}
			className={
				styles.FInputSelect_Container +
				" " +
				props.containerClassName +
				" " +
				styles.FInputSelect__Content_Container +
				" " +
				props.contentContainerClassName +
				" " +
				styles.FInputSelect_Menu_Wrapper +
				" " +
				props.menuClassName +
				" " +
				styles.FInputSelect__Component_Container +
				" " +
				props.componentClassName +
				" " +
				styles.FInputSelect__ClearIcon_Container() +
				" " +
				props.clearIconClassName
			}
			ref={selectRef}
			isMulti={isMulti}
			isLoading={props.isLoading}
			isDisabled={disabled}
			isClearable={isClearable}
			isSearchable={isSearchable}
			placeholder={props.placeholder}
			formatOptionLabel={(option) => {
				const isNew = (option as any).__isNew__;
				if (isNew) return (option as any).label;
				return props.getOptionLabel(option);
			}}
			getOptionValue={(option) => {
				const isNew = (option as any).__isNew__;
				if (isNew) return (option as any).value;
				return props.getOptionKey(option);
			}}
			onChange={(singleValue, actionMethod) => {
				switch (actionMethod.action) {
					case "clear":
						props.onClear && props.onClear();
						break;
					case "select-option":
						isMulti
							? actionMethod.option && props.onSelect(actionMethod.option)
							: singleValue && props.onSelect(singleValue as T);
						break;
					case "pop-value":
					case "remove-value":
						actionMethod.removedValue &&
							props.onRemove &&
							props.onRemove(actionMethod.removedValue);
						break;
					default:
						break;
				}
			}}
			onCreateOption={(input) => {
				if (!isDisableCreate) handleCreateAndAutoFocus(input);
			}}
			options={props.options}
			value={props.value}
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
					const match = props.onCompareInputValue(option.data, value);
					return match;
				} catch (error) {
					console.error("FInputSelect Error: ", error);
				}
				return false;
			}}
		/>
	);
};
