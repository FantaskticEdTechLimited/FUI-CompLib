import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib";
import { CSSProperties, Key, ReactElement, ReactNode } from "react";
import { FSVGIconProps } from "../FSVGIcon/types";
import { FTextProps } from "../FText/types";
import { OnClickFunction, ThemeProps } from "../global.types";

export enum FButtonTypes {
	PRIMARY = "Primary",
	OUTLINE = "Outline",
	SECONDARY = "Secondary",
	TEXT = "Text",
}

type ComponentsType = ReactElement<FIconProps | FSVGIconProps> | ReactNode;

export interface FButtonProps {
	key?: Key;
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
	leadingComponents?: ComponentsType | Array<ComponentsType>;
	actionComponents?: ComponentsType | Array<ComponentsType>;
	// theme for different project
	themeProps?: ThemeProps
}
