import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { CSSProperties, ReactNode } from "react";

export type Nullable<T> = T | null;

export type OnClickFunction = () => void;

export type OnSubmitFuncion<T> =
	| ((data: T) => void)
	| ((data: T) => Promise<void>);

export type OnDataCallbackFunction<T, C> = (
	data: T,
	callbackFunction: C
) => Promise<void>;

export type OnCallBackFuntion<C> = (callbackFunction: C) => Promise<void>;

export interface FTextProps {
	children?: ReactNode;
	color?: FColorTypes | string;
	font?: FFontTypes | string;
	className?: string;
	maxRows?: number;
	style?: CSSProperties;
}
