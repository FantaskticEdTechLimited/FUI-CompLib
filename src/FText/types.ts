import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { CSSProperties, ReactNode } from "react";

export interface FTextProps {
	children: ReactNode;
	color: FColorTypes;
	font: FFontTypes;
	className?: string;
	maxRows?: number;
	style?: CSSProperties;
}
