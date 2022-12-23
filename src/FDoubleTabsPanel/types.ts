import { ReactNode } from "react";
import { FButtonProps } from "../FButton/types";
import {
	FComponentsType,
	FComponentType,
	PropsWithCustomStyle,
} from "../global.types";

export type FDoubleTabsPanelProps = PropsWithCustomStyle & {
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
};
