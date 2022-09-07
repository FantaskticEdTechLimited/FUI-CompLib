import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib";
import { CSSProperties, ReactElement } from "react";
import { FPasswordInputFieldIconProps } from "./svg/types";
import { FOnClickFunction } from "../global.types";
import { FSVGIconProps } from "../FSVGIcon/types";

export interface FPasswordInputFieldProps {
	inputValue?: string;
	renderInputValue?: (data: string) => void;
	disabled?: boolean;
	placeholder?: string;
	// show password
	showPassword?: boolean;
	// action after pressing Enter key
	onEnterPress?: FOnClickFunction;

	leadingComponent?: ReactElement<FSVGIconProps | FIconProps>;

	// props of lock, eye and eye_off icon
	lockIconProps?: FPasswordInputFieldIconProps;
	eyeIconProps?: FPasswordInputFieldIconProps;
	eyeOffIconProps?: FPasswordInputFieldIconProps;

	// css style of FPasswordInputField container
	containerClassName?: string;
	containerStyle?: CSSProperties;
	// css style of FPasswordInputField input area
	inputAreaClassName?: string;
	inputAreaStyle?: CSSProperties;
}
