import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib";
import { CSSProperties } from "react";
import { FTextProps } from "../FText/types";
import { FComponentType, FOnSubmitFunction } from "../global.types";

export interface FEmailInputFieldProps {
	/** Input email value. */
	inputValue?: string;
	/** If `true`, the email inputfield is **NOT** allowed to use. */
	disabled?: boolean;
	/** Placeholder of the inputfield. */
	placeholder?: string;
	/** Label for the warning hints. */
	warningLabel?: string;
	/** If `true`, the input will be checked
	 * whether it is in correct email type (with `@`). */
	autoValidateEmail?: boolean;
	/** Action event after pressing `Enter` key. */
	onEnterPress?: (error?: boolean) => void;
	/** Returns the input email value. */
	renderInputValue?: FOnSubmitFunction<string>;
	/** Leading component (header) of the inputfield. */
	leadingComponent?: FComponentType;
	/** action component (footer) of the inputfield. */
	actionComponent?: FComponentType;
	/** Class name of the email icon. */
	emailIconClassName?: string;
	/** Style of the email icon. */
	emailIconStyle?: CSSProperties;
	/** Properties of the email icon. */
	emailIconProps?: FIconProps;
	/** Class name of the warning label. */
	warninglabelClassName?: string;
	/** Style of the warning label. */
	warningLabelStyle?: CSSProperties;
	/** Properties of the warning label. */
	warningLabelProps?: FTextProps;
	/** Class name of the inputfield wrapper. */
	wrapperClassName?: string;
	/** Style of the inputfield wrapper. */
	wrapperStyle?: CSSProperties;
	/** Class name of the inputfield container. */
	containerClassName?: string;
	/** Style of the inputfield container. */
	containerStyle?: CSSProperties;
	/** Class name of the input area. */
	inputAreaClassName?: string;
	/** Style of the input area. */
	inputAreaStyle?: CSSProperties;
}
