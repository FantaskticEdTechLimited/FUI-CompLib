import { CSSProperties } from "react";
import { OnClickFunction } from "../global.types";

export interface FSwitchButtonProps {
	checked?: boolean;
	disabled?: boolean;
	onClick?: OnClickFunction;

	// css style of FSwitchButton container
	containerClassName?: string;
	containerStyle?: CSSProperties;

	// css style of FSwitchButton svg
	svgClassName?: string;
	svgStyle?: CSSProperties;

	// css style of FSwitchButton circle
	circleColor?: string;
	circleBorderColor?: string;
	circleStrokeWidth?: number | string;
	circleCx?: number | string;
	circleCy?: number | string;
	circleR?: number | string;
}
