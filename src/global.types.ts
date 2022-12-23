import { FIconProps } from "@innoplus-studio/fui-iconlib";
import { ClassAttributes, CSSProperties, ReactElement, ReactNode } from "react";
import { FSVGIconProps } from "./FSVGIcon/types";

export type Nullable<T> = T | null;

export type NumericStringType = number | string;

export type FOnClickFunction = () => void;

export type FOnSubmitFunction<T> =
	| ((data: T) => void)
	| ((data: T) => Promise<void>);

export type FOnDataCallbackFunction<T, C> = (
	data: T,
	callbackFunction: C
) => Promise<void>;

export type FOnCallBackFuntion<C> = (callbackFunction: C) => Promise<void>;

export type FComponentType =
	| ReactElement<FIconProps | FSVGIconProps>
	| ReactNode;

export type FComponentsType = Array<FComponentType>;

export enum FRWDMode {
	PC = "PC",
	TABLET = "TABLET",
	MOBILE = "MOBILE",
}

/** This `ref` is for hover use. */
export type PropsWithDivRef = {
	ref?: ClassAttributes<HTMLDivElement>["ref"];
};

export type PropsWithCustomStyle = {
	style?: CSSProperties;
	className?: HTMLElement["className"];
};

export type PropsWithOnClickFunction = {
	onClick?: FOnClickFunction;
};
