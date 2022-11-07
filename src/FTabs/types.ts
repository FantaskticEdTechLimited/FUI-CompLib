import { CSSProperties, ReactElement } from "react";
import { FTextProps } from "../FText/types";
import { FTabsControllerProps } from "./FTabsController/types";
import { FTabsPanelProps } from "./FTabsPanel/types";

export interface FTabsProps {
	children:
		| Array<ReactElement<FTabsPanelProps>>
		| ReactElement<FTabsPanelProps>;
	/** To control the tabs header and panel content instead of the default controller. */
	controller?: FTabsControllerProps;
	/** If `true`, the default tabs header list is **NOT** able to use. */
	disableHeader?: boolean;
	/** Style of the default tabs header. */
	headerStyle?: CSSProperties;
	/** Class name of the default tabs header. */
	headerClassName?: string;
	/** Properties of the tabs button label of the default tab header. */
	tabsButtonLabelProps?: FTextProps;
}
