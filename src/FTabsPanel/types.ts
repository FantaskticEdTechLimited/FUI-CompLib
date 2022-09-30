import { ReactNode, CSSProperties } from "react";
import { FButtonProps } from "../FButton/types";
import {
	FComponentsType,
	FComponentType,
	CustomTabButtonProps,
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
	) => FComponentType | FComponentsType;
	/** Action components in the tab button. */
	tabActionConmponents?: (
		isSelected: boolean
	) => FComponentType | FComponentsType;
	/** If `true`, the tab panel is **NOT** allowed to use. */
	disabled?: boolean;
	onClick?: FOnClickFunction;
	/** Render user custom tab button. */
	renderCustomizedTabButton?: CustomTabButtonProps;
	/** Properties with `style` and `className` fields of the tab button. */
	tabButtonProps?: FButtonProps;
	/** Control re-render case. Default is `true`. */
	isRenderOnSelected?: boolean;
	/** Style to change the tab panel style. */
	style?: CSSProperties;
	/** Class name to change the tab panel style. */
	className?: string;
}
