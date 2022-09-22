import { CSSProperties } from "react";
import { FPasswordInputFieldIconProps } from "./svg/types";
import {
	FButtonComponentType,
	FOnClickFunction,
	FOnSubmitFunction,
} from "../global.types";

export interface FPasswordInputFieldProps {
	/** Input password value. */
	inputValue?: string;
	/** Returns the input password value. */
	renderInputValue?: FOnSubmitFunction<string>;
	/** If `true`, the password inputfield cannot be used. */
	disabled?: boolean;
	/** Placeholder of the inputfield. */
	placeholder?: string;
	/** If `true`, the input password will be shown. */
	showPassword?: boolean;
	/** Action event after pressing `Enter` key. */
	onEnterPress?: FOnClickFunction;
	/** Leading component (header) of the inputfield. */
	leadingComponent?: FButtonComponentType;
	/** Properties of the lock icon. */
	lockIconProps?: FPasswordInputFieldIconProps;
	/** Properties of the eye icon (show password). */
	eyeIconProps?: FPasswordInputFieldIconProps;
	/** Properties of the eye-off icon (hide password). */
	eyeOffIconProps?: FPasswordInputFieldIconProps;
	/** Class name to change the style of the container. */
	containerClassName?: string;
	/** Style to change the style of the container. */
	containerStyle?: CSSProperties;
	/** Class name to change the style of the input area. */
	inputAreaClassName?: string;
	/** Style to change the style of the input area. */
	inputAreaStyle?: CSSProperties;
}
