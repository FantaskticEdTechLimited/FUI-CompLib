import { CSSProperties } from "react";
import { FScrollBarStyleProps } from "../FScrollBarStyle/types";
import { FTextProps } from "../FText/types";
import { FOnSubmitFunction } from "../global.types";

export interface FInputFieldProps {
	/** Input value. */
	inputValue?: string;
	/** If `true`, the inputfield is **NOT** allowed to use. */
	disabled?: boolean;
	/** Placeholder of the inputfield. */
	placeholder?: string;
	/** Label at the header of the inputfield. */
	label?: string;
	/** If `true`, the inputfield can be expanded. */
	multiline?: boolean;
	/** Limit of the input word.
	 *
	 * If it is set as `30`, the maximum input will be **30** characters.
	 */
	wordCount?: number;
	/** Returns the input value. */
	renderInputValue?: FOnSubmitFunction<string>;
	/** Class name of the inputfield container. */
	containerClassName?: string;
	/** Style of the inputfield container. */
	containerStyle?: CSSProperties;
	/** Class name of the input area. */
	inputAreaClassName?: string;
	/** Style of the input area. */
	inputAreaStyle?: CSSProperties;
	/** Class name of the inputfield (**with `label`**). */
	inputDivClassName?: string;
	/** Style of the inputfield (**with `label`**). */
	inputDivStyle?: CSSProperties;
	/** Class name of the label. */
	labelClassName?: string;
	/** Style of the label. */
	labelStyle?: CSSProperties;
	/** Properties of the label. */
	labelProps?: FTextProps;
	/** Class name of the word count text. */
	wordCountClassName?: string;
	/** Style of the word count text. */
	wordCountStyle?: CSSProperties;
	/** Properties of the word count text. */
	wordCountProps?: FTextProps;
	/** Properties of the scrollbar. */
	scrollBarProps?: FScrollBarStyleProps;
}
