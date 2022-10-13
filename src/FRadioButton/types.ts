import { CSSProperties } from "react";
import { FOnClickFunction } from "../global.types";

export interface FRadioButtonProps {
	/** If `true`, the radio button is checked. */
	checked?: boolean;
	/** If `true`, the radio button is **NOT** able to use. */
	disabled?: boolean;
	/** Click action event of the radio button. */
	onClick?: FOnClickFunction;
	/** Class name of the radio button. */
	className?: string;
	/** Style of the radio button. */
	style?: CSSProperties;
	/** Background color of the radio button. */
	fillColor?: string;
	/** Stroke color of the radio button. */
	color?: string;
	/** Stroke width of the radio button. */
	strokeWidth?: number | string;
}
