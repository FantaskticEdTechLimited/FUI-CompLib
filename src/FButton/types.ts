import { CSSProperties, ReactNode } from "react";
import { FTextProps } from "../FText/types";
import {
	FButtonComponentsType,
	FButtonComponentType,
	FOnClickFunction,
	FOnHoverProperty,
} from "../global.types";

export type FButtonTypes = "Primary" | "Secondary" | "Outline" | "Text";

type LabelProps = Omit<FTextProps, "style" | "className">;

export interface FButtonProps {
	/** Four different button types. */
	type?: FButtonTypes;
	/** Custom content without using `label` field. */
	customChildren?: ReactNode;
	/** If `true`, the button cannot have action event. */
	disabled?: boolean;
	/** Text content of button. */
	label?: string;
	/** Click action event for the button. */
	onClick?: FOnClickFunction;
	/** Class name to change the style of the button label. */
	labelClassName?: FOnHoverProperty<string>;
	/** Style to change the style of the button label. */
	labelStyle?: FOnHoverProperty<CSSProperties>;
	/** Properties of label without `className` and `style` fields under `FTextProps`. */
	labelProps?: LabelProps;
	/** Custom leading component (header) of the button. */
	leadingComponents?: FButtonComponentType | FButtonComponentsType;
	/** Custom action component (footer) of the button. */
	actionComponents?: FButtonComponentType | FButtonComponentsType;
	/** Class name to change the style of the button. */
	className?: FOnHoverProperty<string>;
	/** Style to change the style of the button. */
	style?: FOnHoverProperty<CSSProperties>;
}
