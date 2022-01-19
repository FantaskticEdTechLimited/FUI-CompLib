import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { CSSProperties, ReactNode } from "react";

export type Nullable<T> = T | null;

export type OnClickFunction<T> = (data?: T) => void;

export interface FTextProps {
	children?: ReactNode;
	color?: FColorTypes | string;
	font?: FFontTypes | string;
	className?: string;
	maxRows?: number;
	style?: CSSProperties;
}

