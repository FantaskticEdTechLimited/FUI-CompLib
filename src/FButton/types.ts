import { ClassAttributes, PropsWithChildren } from "react";
import { FTextProps } from "../FText/types";
import {
	FComponentType,
	FComponentsType,
	PropsWithCustomStyle,
	PropsWithOnClickFunction,
} from "../global.types";

export type FButtonTypes = "primary" | "secondary" | "outline" | "text";

export type FButtonProps = PropsWithChildren<unknown> &
	PropsWithCustomStyle &
	PropsWithOnClickFunction & {
		buttonRef?: ClassAttributes<HTMLDivElement>["ref"];
		/** Four different button types. */
		type?: FButtonTypes;
		/** If `true`, the button cannot have action event. */
		disabled?: boolean;
		/** Text content of button. */
		label?: string;
		/** Properties of label. */
		labelProps?: FTextProps;
		/** Custom leading component (header) of the button. */
		leadingComponents?: FComponentType | FComponentsType;
		/** Custom action component (footer) of the button. */
		actionComponents?: FComponentType | FComponentsType;
	};
