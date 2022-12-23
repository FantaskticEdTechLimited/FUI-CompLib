import { ReactNode } from "react";
import { FScrollBarStyleProps } from "../FScrollBarStyle/types";
import { FTextProps } from "../FText/types";
import { FOnSubmitFunction, PropsWithCustomStyle } from "../global.types";

export interface FDropdownOptionDivProps {
	pressCount: number;
	index: number;
	isSelected: boolean;
	props: FDropdownProps<any>;
}

export type FDropdownProps<T = unknown> = PropsWithCustomStyle & {
	/** Options data. */
	options: T[];
	/** Select action event of the dropdown. */
	onSelect: FOnSubmitFunction<T>;
	/** Options that are selected. */
	selectedOptions?: T | T[] | null;
	/** If `true`, the selected options will be hidden. */
	hideSelectedOptions?: boolean;
	/** Warning label for empty options. */
	warningLabel?: string;
	/** Press count of arrow keys. */
	arrowKeyPressCount?: number;
	/** Returns hightlighted option where arrow key is selected. */
	renderArrowKeySelectedOption?: FOnSubmitFunction<T>;
	/** Custom method to compare selected option with listed option. */
	onOptionCompare?: (dataA: T, dataB: T) => boolean;
	/** Returns custom option. */
	customOption?: (data: T, isSelected: boolean) => ReactNode;
	/** Shows the listed option name **only**. */
	renderOptionNameOnly?: (data: T) => string;
	/** Class name of the option div. */
	optionDivClassName?: PropsWithCustomStyle["className"];
	/** Style of the option div. */
	optionDivStyle?: PropsWithCustomStyle["style"];
	/** Properties of the option text. */
	optionTextProps?: FTextProps;
	/** Properties of the warning label. */
	warningLabelProps?: FTextProps;
	/** Properties of the scroll bar. */
	scrollBarProps?: FScrollBarStyleProps;
};
