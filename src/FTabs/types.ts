import { CSSProperties, ReactNode } from "react";
import { FButtonProps } from "../FButton/types";
import { OnClickFunction } from "../global.types";

// interface of each tab
export interface FTabProps {
	id?: string;
	label?: string;
	children?: ReactNode;
	// the tab is whether in active or not
	isActive?: boolean;
	onClick?: OnClickFunction;
	disabled?: boolean;
	tabProps?: FButtonProps;
}

// interface of the tabs container
export interface FTabsProps {
	tabList?: FTabProps[];
	disabled?: boolean;
	// css style of FTabs container
	containerClassName?: string;
	containerStyle?: CSSProperties;
}
