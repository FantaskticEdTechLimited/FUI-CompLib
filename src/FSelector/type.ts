import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib";
import { ComponentType, CSSProperties, ReactNode } from "react";
import { FDropdownProps } from "../FDropdown/types";

export interface FSelectorProps<T> {
	options: T[];
	onSelect: (data: T) => void;
	selectedOption: T | null;

	// css style of FSelector container
	selectorContainerClassName?: string;
	selectorContainerStyle?: CSSProperties;

	// css style of FSelector content div
	contentDivClassName?: string;
	contentDivStyle?: CSSProperties;

	// css style of FSelector wrapper (with dropdown)
	wrapperClassName?: string;
	wrapperStyle?: CSSProperties;
    
    // can remove selected option
	canClear?: boolean;
	label?: string;
	placeholder?: string;
	onClear?: () => void; 
    // display the selected option with user own method
	renderCustomizedSelectedOption?: (data: T) => ReactNode;
    // display the selected option with selected option name only
	renderSelectedOptionNameOnly?: (data: T) => string;

    // css style of FSelector label
	labelClassName?: string;
	labelStyle?: CSSProperties;

    // css style of selected option
	selectedOptionClassName?: string;
	selectedOptionStyle?: CSSProperties;

    
	// change clear icon attributes
	clearIconProps?: FIconProps
	// change open dropdown arrow icon attributes
	dropdownArrowIconProps?: FIconProps
	// user can change the icon of FSelector
	iconComponent?: ReactNode

    // dropdown props

    // whether need to compare selected option is same as option
    compareSelectedOption?: boolean
    // user declare own method to compare selected option with option
	customizedCompareSelectedOption?: (dataA: T, dataB: T) => boolean;
	renderOptionNameOnly?: (data: T) => string;
	renderCustomizedOption?: (data: T, isSelected: boolean) => ReactNode;
	dropdownComponent?: ComponentType<FDropdownProps<any>>;
    
    // css style of FDropdown container
	dropdownContainerClassName?: string;
	dropdownContainerStyle?: CSSProperties;

    // css style of FDropdown option div
	optionDivClassName?: string;
	optionDivStyle?: CSSProperties;

    // css style of FDropdown option text
	optionTextClassName?: string;
	optionTextStyle?: CSSProperties;
}
