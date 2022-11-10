import { CSSProperties } from "react";
import { FTabsControllerProps } from "../FTabsController/types";
import { FTabsPanelProps } from "../FTabsPanel/types";
import { FTabsButtonProps } from "./FTabsButton/types";

export interface FTabsHeaderProps {
	/** Controls the header and tab button using the remote controller. */
	controller: FTabsControllerProps;
	/** Properties of the tabs panel. */
	panelProps: FTabsPanelProps[];
	/** Style of the tabs header. */
	style?: CSSProperties;
	/** Class name of the tabs header. */
	className?: string;
	/** Properties of the tabs button. */
	tabsButtonProps?: FTabsButtonProps;
}
