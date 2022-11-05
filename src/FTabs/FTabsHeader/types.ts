import { CSSProperties } from "react";
import { FButtonProps } from "../../FButton/types";
import { FTabsControllerProps } from "../FTabsController/types";
import { FTabsPanelProps } from "../FTabsPanel/types";

export interface FTabsHeaderProps {
	controller: FTabsControllerProps;
	panelProps: FTabsPanelProps[];
	style?: CSSProperties;
	className?: string;
	tabButtonProps?: FButtonProps;
}
