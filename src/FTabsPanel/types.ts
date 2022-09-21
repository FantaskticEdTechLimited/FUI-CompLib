import { ReactNode, CSSProperties } from "react";
import { FButtonProps } from "../FButton/types";
import {
	ComponentsType,
	ComponentType,
	FOnClickFunction,
} from "../global.types";

export interface FTabPanelProps {
	/** **Required**. Label for the tab button. */
	label: string;
	/** **Required**. Content of the tab panel under corresponding tab button. */
	children: ReactNode;
	/** Leading components in the tab button. */
	tabLeadingComponents?: (
		isSelected: boolean
	) => ComponentType | ComponentsType;
	/** Action components in the tab button. */
	tabActionConmponents?: (
		isSelected: boolean
	) => ComponentType | ComponentsType;
	disabled?: boolean;
	onClick?: FOnClickFunction;
	/** Render user custom tab button. */
	renderCustomizedTabButton?: (
		isSelected: boolean,
		buttonProps: FButtonProps
	) => ReactNode;
	/** Properties with `style` and `className` fields of the tab button. */
	tabButtonProps?: FButtonProps;
	/** Control re-render case. Default is `true`. */
	isRenderOnSelected?: boolean;
	style?: CSSProperties;
	className?: string;
}
