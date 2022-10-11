import { CSSProperties } from "react";
import { FPasswordInputFieldIconProps } from "./svg/types";
import {
	FComponentsType,
	FComponentType,
	FOnClickFunction,
	FOnSubmitFunction,
} from "../global.types";

export interface FPasswordInputFieldProps {
	/** Input password value. */
	value?: string;
	/** If `true`, the password inputfield is **NOT** allowed to use. */
	disabled?: boolean;
	/** Placeholder of the inputfield. */
	placeholder?: string;
	/** If `true`, the input password will be shown. */
	showPassword?: boolean;
	/** If `true`, it will auto focus on the input area. */
	autoFocus?: boolean;
	/** Action event after pressing `Enter` key. */
	onEnterPress?: FOnClickFunction;
	/** Returns the input password value. */
	onInput?: FOnSubmitFunction<string>;
	/** Leading component (header) of the inputfield. */
	leadingComponent?: FComponentType;
	/** action components (footer) of the inputfield. */
	actionComponents?: (
		showPassword?: boolean
	) => FComponentType | FComponentsType;
	/** Properties of the lock icon. */
	lockIconProps?: FPasswordInputFieldIconProps;
	/** Properties of the eye icon (show password). */
	eyeIconProps?: FPasswordInputFieldIconProps;
	/** Properties of the eye-off icon (hide password). */
	eyeOffIconProps?: FPasswordInputFieldIconProps;
	/** Class name of the container. */
	className?: string;
	/** Style of the container. */
	style?: CSSProperties;
	/** Class name of the input area. */
	inputAreaClassName?: string;
	/** Style of the input area. */
	inputAreaStyle?: CSSProperties;
}
