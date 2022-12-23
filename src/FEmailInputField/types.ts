import { FIconProps } from "@innoplus-studio/fui-iconlib";
import { FTextProps } from "../FText/types";
import {
	FComponentType,
	FOnSubmitFunction,
	PropsWithCustomStyle,
} from "../global.types";

export type FEmailInputFieldProps = PropsWithCustomStyle & {
	/** Input email value. */
	value?: string;
	/** If `true`, the email inputfield is **NOT** allowed to use. */
	disabled?: boolean;
	/** Placeholder of the inputfield. */
	placeholder?: string;
	/** Label for the warning hints. */
	warningLabel?: string;
	/** If `true`, the input will be checked
	 * whether it is in correct email type (with `@`). */
	autoValidateEmail?: boolean;
	/** If `true`, it will auto focus on the input area. */
	autoFocus?: boolean;
	/** Action event after pressing `Enter` key. */
	onEnterPress?: (error?: boolean) => void;
	/** Returns the input email value. */
	onInput?: FOnSubmitFunction<string>;
	/** Leading component (header) of the inputfield. */
	leadingComponent?: FComponentType;
	/** action component (footer) of the inputfield. */
	actionComponent?: FComponentType;
	/** Properties of the email icon. */
	emailIconProps?: FIconProps;
	/** Properties of the warning label. */
	warningLabelProps?: FTextProps;
	/** Class name of the inputfield wrapper (with `warningLabel`). */
	wrapperClassName?: PropsWithCustomStyle["className"];
	/** Style of the inputfield wrapper (with `warningLabel`). */
	wrapperStyle?: PropsWithCustomStyle["style"];
	/** Class name of the input area. */
	inputAreaClassName?: PropsWithCustomStyle["className"];
	/** Style of the input area. */
	inputAreaStyle?: PropsWithCustomStyle["style"];
};
