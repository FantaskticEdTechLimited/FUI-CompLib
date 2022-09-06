import { CSSProperties } from "react";
import { FOnClickFunction } from "../global.types";

export interface FRadioButtonProps {
	checked?: boolean;
	onClick?: FOnClickFunction;

	// css style of FRadioButton container
	containerClassName?: string;
	containerStyle?: CSSProperties;
	disabled?: boolean;

	// css style of FRadioButton svg path
	fillColor?: string;
	strokeColor?: string;
	strokeWidth?: number | string;
}
