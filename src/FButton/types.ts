import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib";
import { CSSProperties, Key, ReactElement, ReactNode } from "react";
import { FSVGIconProps } from "../FSVGIcon/types";
import { FTextProps } from "../FText/types";
import { OnClickFunction } from "../global.types";

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
	customChildren?: ReactNode;
	className?: (isHover?: boolean) => string;
	disabled?: boolean;
	label?: string;
	onClick?: OnClickFunction;
	style?: (isHover?: boolean) => CSSProperties;
	labelClassName?: (isHover?: boolean) => string;
	labelStyle?: (isHover?: boolean) => CSSProperties;
	labelProps?: Omit<FTextProps, "style" | "className">;
	leadingComponents?: ComponentsType | Array<ComponentsType>;
	actionComponents?: ComponentsType | Array<ComponentsType>;
}
