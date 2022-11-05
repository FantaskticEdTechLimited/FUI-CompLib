import { CSSProperties, ReactElement } from "react";
import { FButtonProps } from "../FButton/types";
import { FTabsControllerProps } from "./FTabsController/types";
import { FTabsPanelProps } from "./FTabsPanel/types";

export interface FTabsProps {
	children:
		| Array<ReactElement<FTabsPanelProps>>
		| ReactElement<FTabsPanelProps>;
	/** To control the tab header and panel content instead of the default controller. */
	controller?: FTabsControllerProps;
	/** If `true`, the default tab header list is **NOT** able to use. */
	disableHeader?: boolean;
	/** Style of the default tab header. */
	headerStyle?: CSSProperties;
	/** Class name of the default tab header. */
	headerClassName?: string;
	/** Properties of the tab button of the default tab header. */
	tabButtonProps?: (isSelected?: boolean) => FButtonProps;
}
