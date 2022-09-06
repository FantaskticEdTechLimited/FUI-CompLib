import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib";
import { CSSProperties, Key, ReactElement, ReactNode } from "react";
import { FSVGIconProps } from "../FSVGIcon/types";
import { FTextProps } from "../FText/types";
import { FOnClickFunction } from "../global.types";

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
	disabled?: boolean;
	label?: string;
	onClick?: FOnClickFunction;
	labelClassName?: (isHover?: boolean) => string;
	labelStyle?: (isHover?: boolean) => CSSProperties;
	labelProps?: Omit<FTextProps, "style" | "className">;
	leadingComponents?: ComponentsType | Array<ComponentsType>;
	actionComponents?: ComponentsType | Array<ComponentsType>;
	/**
	 * Example of using hover effect for className:
	 *
	 * _assume using **typeStyle**_
	 *
	 * `export const ButtonDiv = (isHover: boolean) => style({ `
	 *
	 * `     backgroundColor: isHover ? "white" : undefined`
	 *
	 * `})`
	 *
	 * `<FButton className={(isHover) => styles.ButtonDiv(isHover!)} />`
	 */
	className?: (isHover?: boolean) => string;
	/**
	 * Example of using inline style with hover state:
	 *
	 * `const buttonStyle = (hover?: boolean) => {`
	 *
	 * `	return {backgroundColor: hover ? "red" : "green"};`
	 *
	 * `};`
	 *
	 * `<FButton style={buttonStyle} />;`
	 *
	 * Without hover effect, e.g. `<FButton style={()=>({ padding: "4px" })}`
	 */
	style?: (isHover?: boolean) => CSSProperties;
}
