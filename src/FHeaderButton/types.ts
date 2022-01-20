import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib";
import { CSSProperties, ReactElement } from "react"; 
import { OnClickFunction } from "../global.types";
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
	onClick?: OnClickFunction;
	// disable auto resize the button based on screenWidth
	disableAutoResize?: boolean;
	// size is only active when disableAutoResize
	size?: "small" | "large";
	iconStrokeColor?: string;
	iconStrokeWidth?: string | number;

	// css style of FHeaderButton container
	containerClassName?: string;
	containerStyle?: CSSProperties;
}
