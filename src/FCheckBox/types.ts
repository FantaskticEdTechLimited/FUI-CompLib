import { CSSProperties } from "react";
import { OnClickFunction, ThemeProps } from "../global.types";

export interface FCheckBoxProps {
	checked: boolean;
	onClick: OnClickFunction;
	variant: "round" | "square";
	disabled?: boolean;

	// css style of FCheckBox container
	containerClassName?: string;
	containerStyle?: CSSProperties;

	// css style of FCheckBox svg path
	borderColor?: string;
	fillColor?: string;
	iconColor?: string;
	strokeWidth?: number | string;

	// theme for different project
	themeProps?: ThemeProps
}
