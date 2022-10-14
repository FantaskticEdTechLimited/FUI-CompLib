import { CSSProperties, ReactNode } from "react";
import { FTextProps } from "../FText/types";
import {
	FOnClickFunction,
	NumericStringType,
	FOnHoverProperty,
	FComponentType,
	FComponentsType,
} from "../global.types";

export type FButtonTypes = "Primary" | "Secondary" | "Outline" | "Text";

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
	/** Index (unique id) of the button. */
	index?: NumericStringType;
	/** Properties of label. */
	labelProps?: FOnHoverProperty<FTextProps>;
	/** Custom leading component (header) of the button. */
	leadingComponents?: FComponentType | FComponentsType;
	/** Custom action component (footer) of the button. */
	actionComponents?: FComponentType | FComponentsType;
	/** Class name of the button. */
	className?: FOnHoverProperty<string>;
	/** Style of the button. */
	style?: FOnHoverProperty<CSSProperties>;
}
