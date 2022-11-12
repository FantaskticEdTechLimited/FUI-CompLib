import { CSSProperties, ReactNode } from "react";
import { FButtonProps } from "../FButton/types";
import { FComponentsType, FComponentType } from "../global.types";

export interface FDoubleTabsPanelProps {
	/** If `true`, the tab panel is **NOT** able to use. */
	disabled?: boolean;
	/** Content of the tab panel under corresponding tab button. */
	children: ReactNode;
	/** Label for the _default_ tab button.
	 *
	 * Default labels: _Double Tab 1_ and _Double Tab 2_.
	 */
	label?: string;
	/** Leading components of the tab button. */
	tabButtonLeadingComponents?: (
		isSelected: boolean
	) => FComponentType | FComponentsType;
	/** Action components of the tab button. */
	tabButtonActionComponents?: (
		isSelected: boolean
	) => FComponentType | FComponentsType;
	/** Properties of the tab button. */
	tabButtonProps?: FButtonProps;
	/** Control re-render case. Default is `true`. */
	isRenderOnSelected?: boolean;
	/** Style of the tab panel. */
	style?: CSSProperties;
	/** Class name of the tab panel. */
	className?: string;
}
