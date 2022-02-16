import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib";
import { CSSProperties, ReactElement, ReactNode } from "react";
import { FDropdownProps } from "../FDropdown/types";
import { FTextProps } from "../FText/types";
import { FTheme } from "../FThemeContext/types";
import { OnClickFunction } from "../global.types";

export interface FSelectorProps<T> {
	options: T[];
	onSelect: (data: T) => void;
	selectedOptions: T | null;
	disabled?: boolean;
	label?: string;
	// show label only when no selectedOption or no placeholder
	showLabelOnly?: boolean;
	placeholder?: string;
	onClear?: OnClickFunction;
	// display the selected option with user own method
	renderCustomizedSelectedOption?: (data: T) => ReactNode;
	// display the selected option with selected option name only
	renderSelectedOptionNameOnly?: (data: T) => string;

	clearIconProps?: FIconProps;
	dropdownArrowIconProps?: FIconProps;
	iconComponent?: ReactNode;
	dropdownProps?: FDropdownProps<T>; // Omit<FDropdownProps<any>, "options" | "onSelect">;
	dropdownComponent?: ReactElement<FDropdownProps<any>>;

	// css style of FSelector label
	labelClassName?: string;
	labelStyle?: CSSProperties;
	labelProps?: FTextProps;

	// css style of selected option text
	selectedOptionClassName?: string;
	selectedOptionStyle?: CSSProperties;
	selectedOptionProps?: FTextProps;

	// css style of FSelector container
	selectorContainerClassName?: string;
	selectorContainerStyle?: CSSProperties;

	// css style of FSelector content div
	contentDivClassName?: string;
	contentDivStyle?: CSSProperties;

	// css style of FSelector wrapper (with dropdown)
	wrapperClassName?: string;
	wrapperStyle?: CSSProperties;

	// css style of FDropdown container
	dropdownContainerClassName?: string;
	dropdownContainerStyle?: CSSProperties;
}

export interface FSelectorContainerStyleProps<T> {
	isClicked: boolean;
	disabled: boolean;
	selectedOptions: T | null;
	theme: FTheme;
}
