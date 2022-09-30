import { CSSProperties, ReactElement, ReactNode } from "react";
import { FButtonProps } from "../FButton/types";
import { FTabPanelProps } from "../FTabsPanel/types";
import { CustomTabButtonProps } from "../global.types";

type FTabsContentType =
	| ReactElement<FTabPanelProps>
	| Array<ReactElement<FTabPanelProps>>;

export interface FTabsProps {
	/** Content under corresponding tab. */
	children: FTabsContentType;
	/** If `true`, the tab is **NOT** allowed to use. */
	disabled?: boolean;
	/** Leading components in the tab header. */
	leadingComponents?: ReactNode;
	/** Action components in the tab header. */
	actionComponents?: ReactNode;
	/** Render user custom tab button. */
	renderCustomizedTabButton?: CustomTabButtonProps;
	/** Class name of the wrapper. */
	wrapperClassName?: string;
	/** Style of the wrapper. */
	wrapperStyle?: CSSProperties;
	/** Class name of the tab header. */
	headerClassName?: string;
	/** Style of the tab header. */
	headerStyle?: CSSProperties;
	/** Class name of the tab button. */
	tabContainerClassName?: string;
	/** Style of the tab button. */
	tabContainerStyle?: CSSProperties;
	/** Properties with `style` and `className` fields of the tab button. */
	tabButtonProps?: FButtonProps;
}
