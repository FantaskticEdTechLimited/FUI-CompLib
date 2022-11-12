import { CSSProperties } from "react";
import {
	FOnClickFunction,
	FOnHoverProperty,
	NumericStringType,
} from "../global.types";

export type FCheckBoxType = "round" | "square";

export interface FCheckBoxProps {
	/** Two different types of the checkbox. */
	type: FCheckBoxType;
	/** Check status of the checkbox. */
	checked: boolean;
	/** If `true`, the checkbox is **NOT** able to use. */
	disabled?: boolean;
	/** Border color of the checkbox. */
	borderColor?: string;
	/** Background color of the checkbox. */
	fillColor?: string;
	/** Icon stroke color of the checkbox. */
	iconColor?: string;
	/** Stroke width of the checkbox. */
	strokeWidth?: NumericStringType;
	/** Click action event of the checkbox. */
	onClick: FOnClickFunction;
	/** Class name of the checkbox. */
	className?: FOnHoverProperty<string>;
	/** Style of the checkbox. */
	style?: FOnHoverProperty<CSSProperties>;
}
