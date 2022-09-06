import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib";
import { CSSProperties, ReactElement, ReactNode } from "react";
import { FDropdownProps } from "../FDropdown/types";
import { FTextProps } from "../FText/types";
import { FOnClickFunction } from "../global.types";

export interface FSelectProps<T> {
	options: T[];
	onSelect: (data: T) => void;
	selectedOptions: T | null;
	disabled?: boolean;
	label?: string;
	// show label only when no selectedOption or no placeholder
	showLabelOnly?: boolean;
	placeholder?: string;
	onClear?: FOnClickFunction;

	// display the selected option with user own method
	renderCustomizedSelectedOption?: (data: T) => ReactNode;
	renderCustomizedOption?: (data: T) => ReactNode;
	// display the selected option with selected option name only
	renderSelectedOptionNameOnly?: (data: T) => string;
	renderOptionNameOnly?: (data: T) => string;

	clearIconProps?: FIconProps;
	dropdownArrowIconProps?: FIconProps;
	iconComponent?: ReactNode;
	dropdownProps?: FDropdownProps<T>; // Omit<FDropdownProps<any>, "options" | "onSelect">;
	dropdownComponent?: ReactElement<FDropdownProps<any>>;

	// css style of FSelect label
	labelClassName?: string;
	labelStyle?: CSSProperties;
	labelProps?: FTextProps;

	// css style of selected option text
	selectedOptionClassName?: string;
	selectedOptionStyle?: CSSProperties;
	selectedOptionProps?: FTextProps;

	// css style of FSelect container
	selectorContainerClassName?: string;
	selectorContainerStyle?: CSSProperties;

	// css style of FSelect content div
	contentDivClassName?: string;
	contentDivStyle?: CSSProperties;

	// css style of FSelect wrapper (with dropdown)
	wrapperClassName?: string;
	wrapperStyle?: CSSProperties;

	// css style of FDropdown container
	dropdownContainerClassName?: string;
	dropdownContainerStyle?: CSSProperties;
}

export interface FSelectContainerStyleProps<T> {
	isClicked: boolean;
	disabled: boolean;
	selectedOptions: T | null;
}
