import { CSSProperties } from "react";
import { FTextProps } from "../FText/types";
import { FOnSubmitFunction } from "../global.types";

export interface FNumberInputFieldProps {
	/** Input value. */
	value?: number;
	/** If `true`, the inputfield is **NOT** allowed to use. */
	disabled?: boolean;
	/** Placeholder of the inputfield. */
	placeholder?: string;
	/** Label at the header of the inputfield. */
	label?: string;
	/** If `true`, it will auto focus on the input area. */
	autoFocus?: boolean;
	/** Returns the input value. */
	onInput?: FOnSubmitFunction<number>;
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
}
