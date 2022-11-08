import { CSSProperties, ReactNode } from "react";

export interface FTabsPanelProps {
	/** Label of the tabs button. */
	label: string;
	/** Key value of the tabs button. */
	tabsKey: string;
	children?: ReactNode;
	/** Style of the tabs panel. */
	style?: CSSProperties;
	/** Class name of the tabs panel. */
	className?: string;
}
