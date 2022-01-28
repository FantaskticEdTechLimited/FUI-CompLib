import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib";
import { CSSProperties, ReactElement } from "react";
import { FSVGIconProps } from "../FSVGIcon/types";
import { FTextProps } from "../FText/types";
import { ThemeProps } from "../global.types";

export interface FEmailInputFieldProps {
	inputValue?: string;
	renderInputValue?: (data: string) => void;
	placeholder?: string;
	disabled?: boolean;
	// to check whether the input is in email type, e.g. @
	checkInput?: boolean;
	// action after pressing Enter key
	onEnterPress?: (error?: boolean) => void;

	iconComponent?: ReactElement<FSVGIconProps | FIconProps>;
	// css style of email icon
	iconClassName?: string;
	iconStyle?: CSSProperties;
	iconProps?: FIconProps;

	warningLabel?: string;
	// css style of warning label
	warninglabelClassName?: string;
	warningLabelStyle?: CSSProperties;
	warningLabelProps?: FTextProps;

	// css style of FEmailInputField wrapper
	wrapperClassName?: string;
	wrapperStyle?: CSSProperties;
	// css style of FEmailInputField container
	containerClassName?: string;
	containerStyle?: CSSProperties;
	// css style of FEmailInputField input area
	inputAreaClassName?: string
	inputAreaStyle?: CSSProperties
	// theme for different project
	themeProps?: ThemeProps
}
