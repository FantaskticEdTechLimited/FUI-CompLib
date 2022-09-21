import { CSSProperties, ReactNode } from "react";
import { FTextProps } from "../FText/types";
import {
	ComponentsType,
	ComponentType,
	FOnClickFunction,
	FOnHoverProperty,
} from "../global.types";

export type FButtonTypes = "Primary" | "Secondary" | "Outline" | "Text";

type LabelProps = Omit<FTextProps, "style" | "className">;

export interface FButtonProps {
	type?: FButtonTypes;
	/** Custom content without using `label` field. */
	customChildren?: ReactNode;
	/** If true, the button cannot have action event. */
	disabled?: boolean;
	/** Text content of button. */
	label?: string;
	onClick?: FOnClickFunction;
	labelClassName?: FOnHoverProperty<string>;
	labelStyle?: FOnHoverProperty<CSSProperties>;
	/** Properties of label without `className` and `style` fields under `FTextProps`.*/
	labelProps?: LabelProps;
	leadingComponents?: ComponentType | ComponentsType;
	actionComponents?: ComponentType | ComponentsType;
	className?: FOnHoverProperty<string>;
	style?: FOnHoverProperty<CSSProperties>;
}
