import { FTextProps } from "../FText/types";
import { FOnSubmitFunction, PropsWithCustomStyle } from "../global.types";

export type FNumberInputFieldProps = PropsWithCustomStyle & {
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
	/** Class name of the input area. */
	inputAreaClassName?: PropsWithCustomStyle["className"];
	/** Style of the input area. */
	inputAreaStyle?: PropsWithCustomStyle["style"];
	/** Properties of the label. */
	labelProps?: FTextProps;
};
