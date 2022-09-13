import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib";
import { CSSProperties, ReactElement } from "react";
import { FOnClickFunction, FRwdSizeProps } from "../global.types";
import { FSVGIconProps } from "../FSVGIcon/types";

export enum FHeaderButtonTypes {
	BACK = "Back",
	CLOSE = "Close",
	MORE = "More",
}

export interface FHeaderButtonProps {
	type?: FHeaderButtonTypes;
	children?: ReactElement<FSVGIconProps | FIconProps>;
	disabled?: boolean;
	onClick?: FOnClickFunction;
	/**
	 *	To disable auto resize the button based on screenWidth
	 *
	 *	Then can use `size` to control the button size
	 */
	disableAutoResize?: boolean;
	// change rwd size
	configureRwdSize?: FRwdSizeProps;
	// size is only active when disableAutoResize
	size?: "small" | "large";
	iconStrokeColor?: string;
	iconStrokeWidth?: string | number;
	// same usage of FButton
	className?: (isHover?: boolean) => string;
	style?: (isHover?: boolean) => CSSProperties;
}
