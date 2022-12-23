import { ClassAttributes } from "react";
import {
	NumericStringType,
	PropsWithCustomStyle,
	PropsWithOnClickFunction,
} from "../global.types";

export type FCheckBoxType = "round" | "square";

export type FCheckBoxProps = PropsWithCustomStyle &
	PropsWithOnClickFunction & {
		ref?: ClassAttributes<SVGSVGElement>["ref"];
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
	};
