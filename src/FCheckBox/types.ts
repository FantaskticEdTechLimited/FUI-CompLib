import { CSSProperties } from "react";
import { FOnClickFunction } from "../global.types";

export interface FCheckBoxProps {
	checked: boolean;
	onClick: FOnClickFunction;
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
}
