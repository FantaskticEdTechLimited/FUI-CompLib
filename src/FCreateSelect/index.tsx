import { useRef } from "react";
import CreatableSelect from "react-select/creatable";
import { FCreateSelectProps } from "./types";
import * as styles from "./styles";
import React from "react";

/**
	Compared with FDropdown and FSelect, FCreateSelect is more enhanced in option array and filtering.

	Reference: https://react-select.com/home
*/

export const FCreateSelect = <T,>(props: FCreateSelectProps<T>) => {
	const { isClearable = true } = props; //default
	const selectRef = useRef(null);
	const isArray = Array.isArray(props.value);
	if ((isArray && !props.isMulti) || (!isArray && props.isMulti)) {
		return <div>Data(s) and Multi mismatch</div>;
	}

	const handleCreateAndAutoFocus = async (inputValue: string) => {
		props.onCreate && (await props.onCreate(inputValue));
		selectRef.current && (selectRef.current as any).focus();
	};

	return (
		<CreatableSelect
			styles={props.styles}
			className={
				styles.FCreateSelect_Container +
				" " +
				props.containerClassName +
				" " +
				styles.FCreateSelect__Content_Container +
				" " +
				props.contentContainerClassName +
				" " +
				styles.FCreateSelect_Menu_Wrapper +
				" " +
				props.menuClassName +
				" " +
				styles.FCreateSelect__Component_Container +
				" " +
				props.componentClassName +
				" " +
				styles.FCreateSelect__ClearIcon_Container() +
				" " +
				props.clearIconClassName
			}
			ref={selectRef}
			isMulti={props.isMulti}
			isLoading={props.isLoading}
			isDisabled={props.disabled}
			isClearable={isClearable}
			isSearchable
			placeholder={props.placeholder}
			// formatCreateLabel={(input)=>`Hello ${input}`}
			formatOptionLabel={(option) => {
				const isNew = (option as any).__isNew__;
				if (isNew) {
					return (option as any).label;
				}
				return props.getOptionLabel(option);
			}}
			getOptionValue={(option) => {
				const isNew = (option as any).__isNew__;
				if (isNew) {
					return (option as any).value;
				}
				return props.getOptionKey(option);
			}}
			onChange={(singleValue, actionMethod) => {
				switch (actionMethod.action) {
					case "clear":
						props.onClear && props.onClear();
						break;
					case "select-option":
						props.isMulti
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
				if (!props.isDisableCreate) {
					handleCreateAndAutoFocus(input);
				}
			}}
			options={props.options}
			value={props.value}
			filterOption={(option, inputValue) => {
				// default hided selected Options

				// if no input, options will not be filter
				if (!inputValue || inputValue === null) {
					return true;
				}

				// if input = option value, is create new option
				if (!props.isDisableCreate) {
					// isDisableCreate will make create option hidden
					// if (option.value === inputValue) {
					// 	return true
					// }
					const isNew = (option.data as any).__isNew__;
					if (isNew) {
						return true;
					}
				} else {
					// is disalbe create
					const isNew = (option.data as any).__isNew__;
					if (isNew) {
						return false;
					}
				}
				try {
					const match = props.onCompareInputValue(option.data, inputValue);
					return match;
				} catch (error) {
					console.error("FCreateSelect Error: ", error);
				}
				return false;
			}}
		/>
	);
};
