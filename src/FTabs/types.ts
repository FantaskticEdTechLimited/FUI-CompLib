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
	/** If `true`, the tab cannot be used. */
	disabled?: boolean;
	/** Leading components in the tab header. */
	leadingComponents?: ReactNode;
	/** Action components in the tab header. */
	actionComponents?: ReactNode;
	/** Render user custom tab button. */
	renderCustomizedTabButton?: CustomTabButtonProps;
	/** Class name to change the style of the wrapper. */
	wrapperClassName?: string;
	/** Style to change the style of the wrapper. */
	wrapperStyle?: CSSProperties;
	/** Class name to change the style of the header container. */
	headerClassName?: string;
	/** Style to change the style of the header container. */
	headerStyle?: CSSProperties;
	/** Class name to change the style of the tab button. */
	tabContainerClassName?: string;
	/** Style to change the style of the tab button. */
	tabContainerStyle?: CSSProperties;
	/** Properties with `style` and `className` fields of the tab button. */
	tabButtonProps?: FButtonProps;
}
