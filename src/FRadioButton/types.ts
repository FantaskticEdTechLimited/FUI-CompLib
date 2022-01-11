import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { CSSProperties } from "react";
import { OnClickFunction } from "../global.types";

export interface FRadioButtonProps {
	checked?: boolean;
	onClick?: OnClickFunction<void>;

	// css style of FRadioButton container
	containerClassName?: string;
	containerStyle?: CSSProperties;
	disabled?: boolean;

	// css style of FRadioButton svg path
	fillColor?: FColorTypes | string;
	strokeColor?: FColorTypes | string;
	strokeWidth?: number | string;
}
