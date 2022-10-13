import { ReactNode, CSSProperties } from "react";
import { FButtonProps } from "../FButton/types";
import { FCustomTabButtonProps } from "../FTabs/types";
import {
	FComponentsType,
	FComponentType,
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
	customTabButton?: FCustomTabButtonProps;
	/** Properties of the tab button. */
	tabButtonProps?: FButtonProps;
	/** Control re-render case. Default is `true`. */
	isRenderOnSelected?: boolean;
	/** Style of the tab panel. */
	style?: CSSProperties;
	/** Class name of the tab panel. */
	className?: string;
}
