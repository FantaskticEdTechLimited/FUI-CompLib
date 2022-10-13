import { CSSProperties } from "react";
import { FOnClickFunction, NumericStringType } from "../../global.types";

export interface FPasswordInputFieldIconProps {
	/** Style of the icon. */
	style?: CSSProperties;
	/** Class name of the icon. */
	className?: string;
	/** If `true`, the icon is **NOT** able to use. */
	disabled?: boolean;
	/** Stroke color of the icon. */
	strokeColor?: string;
	/** Stroke width of the icon. */
	strokeWidth?: NumericStringType;
	/** Click action event of the icon. */
	onClick?: FOnClickFunction;
}
