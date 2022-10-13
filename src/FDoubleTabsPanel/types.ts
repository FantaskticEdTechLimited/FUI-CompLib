import { CSSProperties, ReactNode } from "react";
import { FButtonProps } from "../FButton/types";
import { FCustomTabButtonProps } from "../FTabs/types";
import { FComponentsType, FComponentType } from "../global.types";

export interface FDoubleTabsPanelProps {
	/** If `true`, the tab panel is **NOT** able to use. */
	disabled?: boolean;
	/** **Required**. Content of the tab panel under corresponding tab button. */
	children?: ReactNode;
	/** **Required**. Label for the tab button.
	 *
	 * Default labels: _Double Tab 1_ and _Double Tab 2_.
	 */
	label?: string;
	tabButtonLeadingComponents?: (
		isSelected: boolean
	) => FComponentType | FComponentsType;
	tabButtonActionComponents?: (
		isSelected: boolean
	) => FComponentType | FComponentsType;
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
