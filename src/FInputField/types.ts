import { CSSProperties } from "react";
import { FScrollBarStyleProps } from "../FScrollBarStyle/types";
import { FTextProps } from "../FText/types";
import { FOnSubmitFunction } from "../global.types";

export interface FInputFieldProps {
	/** Input value. */
	value?: string;
	/** If `true`, the inputfield is **NOT** allowed to use. */
	disabled?: boolean;
	/** Placeholder of the inputfield. */
	placeholder?: string;
	/** Label at the header of the inputfield. */
	label?: string;
	/** If `true`, the inputfield can be expanded. */
	multiline?: boolean;
	/** Limit of the input word. It **only** works for value > 0.
	 *
	 * For example, if it is set as `30`, the maximum input will be **30** characters.
	 */
	wordCount?: number;
	/** If `true`, it will auto focus on the input area. */
	autoFocus?: boolean;
	/** Returns the input value. */
	onInput?: FOnSubmitFunction<string>;
	/** Class name of the inputfield container. */
	className?: string;
	/** Style of the inputfield container. */
	style?: CSSProperties;
	/** Class name of the input area. */
	inputAreaClassName?: string;
	/** Style of the input area. */
	inputAreaStyle?: CSSProperties;
	/** Class name of the inputfield (**with `label`**). */
	inputDivClassName?: string;
	/** Style of the inputfield (**with `label`**). */
	inputDivStyle?: CSSProperties;
	/** Properties of the label. */
	labelProps?: FTextProps;
	/** Properties of the word count text. */
	wordCountProps?: FTextProps;
	/** Properties of the scrollbar. */
	scrollBarProps?: FScrollBarStyleProps;
}
