import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { CSSProperties } from "react";
import { OnClickFunction } from "../global.types";

export interface FCheckBoxProps {
	checked: boolean;
	onClick: OnClickFunction<void>;
	variant: "round" | "square";

	// css style of FCheckBox container
	containerClassName?: string;
	containerStyle?: CSSProperties;
	disabled?: boolean;

	// css style of FCheckBox svg path
	borderColor?: FColorTypes;
	fillColor?: FColorTypes;
	iconColor?: FColorTypes;
	strokeWidth?: number | string;
}
