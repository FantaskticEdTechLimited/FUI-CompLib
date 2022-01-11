import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { CSSProperties } from "react";
import { OnClickFunction } from "../global.types";

export interface FCheckBoxProps {
	checked: boolean;
	onClick: OnClickFunction<void>;
	variant: "round" | "square";
	disabled?: boolean;

	// css style of FCheckBox container
	containerClassName?: string;
	containerStyle?: CSSProperties;

	// css style of FCheckBox svg path
	borderColor?: FColorTypes | string;
	fillColor?: FColorTypes | string;
	iconColor?: FColorTypes | string;
	strokeWidth?: number | string;
}
