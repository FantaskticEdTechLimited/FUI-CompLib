import { CSSProperties, ReactNode } from "react";
import { FTextProps } from "../FText/types";
import {
	FComponentsType,
	FComponentType,
	FOnClickFunction,
	FOnHoverProperty,
} from "../global.types";

export type FButtonTypes = "Primary" | "Secondary" | "Outline" | "Text";

export type FButtonLabelProps = Omit<FTextProps, "style" | "className">;

export interface FButtonProps {
	/** Four different button types. */
	type?: FButtonTypes;
	/** If `true`, the button cannot have action event. */
	disabled?: boolean;
	/** Text content of button. */
	label?: string;
	/** Click action event of the button. */
	onClick?: FOnClickFunction;
	/** Custom content without using `label` field. */
	customChildren?: ReactNode;
	/** Class name of the button label. */
	labelClassName?: FOnHoverProperty<string>;
	/** Style of the button label. */
	labelStyle?: FOnHoverProperty<CSSProperties>;
	/** Properties of label without `className` and `style` fields under `FTextProps`. */
	labelProps?: FButtonLabelProps;
	/** Custom leading component (header) of the button. */
	leadingComponents?: FComponentType | FComponentsType;
	/** Custom action component (footer) of the button. */
	actionComponents?: FComponentType | FComponentsType;
	/** Class name of the button. */
	className?: FOnHoverProperty<string>;
	/** Style of the button. */
	style?: FOnHoverProperty<CSSProperties>;
}
