import { CSSProperties, ReactNode } from "react";
import { FTheme } from "..";
import { FScrollBarProps } from "../FScrollBar/types";
import { FTextProps } from "../FText/types";

export interface FDropdownProps<T> {
	options?: T | T[];
	onSelect?: (data: T, isSelected: boolean) => void;
	// selected option or options
	selectedOptions?: T | T[] | null;
	hideSelectedOptions?: boolean;
	// warning label for empty options in FDropdown
	emptyOptionHintLabel?: string;

	// press count of arrow key on FTagInputField
	arrowKeyPressCount?: number;
	// render hightlighted option where arrow key is selected
	renderArrowKeySelectedOption?: (data: T) => void;

	// whether need to compare selected option is same as option
	compareSelectedOption?: boolean;
	// user declare own method to compare selected option with option
	customizedCompareSelectedOption?: (dataA: T | T[], dataB: T | T[]) => boolean;

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
	optionTextProps?: FTextProps;

	// css style of FDropdown empty option text
	emptyOptionTextClassName?: string;
	emptyOptionTextStyle?: CSSProperties;
	emptyOptionTextProps?: FTextProps;

	scrollBarProps?: FScrollBarProps;
}

export interface FDropdownOptionDivProps {
	pressCount: number;
	index: number;
	isSelected: boolean;
	props: FDropdownProps<any>;
	theme: FTheme;
}
