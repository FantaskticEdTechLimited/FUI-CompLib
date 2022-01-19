import { CSSProperties, ReactNode } from "react";
import { FTextProps, OnClickFunction } from "../global.types";

export enum FButtonTypes {
	PRIMARY = "Primary",
	OUTLINE = "Outline",
	SECONDARY = "Secondary",
	TEXT = "Text",
}

export interface FButtonProps {
	type?: FButtonTypes;
	children?: ReactNode;
	className?: string;
	disabled?: boolean;
	label?: string;
	onClick?: OnClickFunction;
	style?: CSSProperties;
	labelClassName?: string;
	labelStyle?: CSSProperties;
	labelProps?: FTextProps;
	leadingComponents?: ReactNode;
	actionComponents?: ReactNode;
}
