import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { CSSProperties, ReactNode } from "react";

export type Nullable<T> = T | null;

export type OnClickFunction<T> = (data?: T) => void;

export interface FTextProps {
	children?: ReactNode;
	color?: FColorTypes | string;
	font?: FFontTypes;
	className?: string;
	maxRows?: number;
	style?: CSSProperties;
}

export interface FButtonProps {
	children?: ReactNode;
	className?: string;
	disabled?: boolean;
	label?: string;
	onClick?: OnClickFunction<void>;
	style?: CSSProperties;
	labelClassName?: string;
	labelStyle?: CSSProperties;
	labelProps?: FTextProps
}
