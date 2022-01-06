import { CSSProperties, ReactNode } from "react";

export interface FDropdownProps<T> {
	options: T[];
	onSelect: (data: T) => void;
	selectedOption: T | null;

    // whether need to compare selected option is same as option
    compareSelectedOption?: boolean
    // user declare own method to compare selected option with option
	customizedCompareSelectedOption?: (dataA: T, dataB: T) => boolean;

    // display the option with user own method 
	renderCustomizedOption?: (data: T, isSelected: boolean) => ReactNode;
    // display the option with option name only 
	renderOptionNameOnly?: (data: T) => string;

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
