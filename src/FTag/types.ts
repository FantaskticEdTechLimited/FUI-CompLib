import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib";
import { CSSProperties, ReactNode } from "react";
import { FTextProps } from "../FText/types";
import { OnClickFunction } from "../global.types";

export interface FTagProps {
	tagId: string;
	children?: ReactNode;
	disabled?: boolean;
	label?: string;
	onClick?: OnClickFunction;
	onDelete?: OnClickFunction;

	// user can design own action icon or comp, e.g. tick icon
	actionComponents?: ReactNode;
	// user can create own delete icon style
	deleteIconProps?: FIconProps;
	// user can design own leading icon or comp, e.g. avator
	leadingComponents?: ReactNode;

	// css style of FTag
	className?: string;
	style?: CSSProperties;

	// css style of FTag label
	labelClassName?: string;
	labelStyle?: CSSProperties; 
	labelProps?: FTextProps;
}
