import { CSSProperties, ReactElement, ReactNode } from "react";
import { FButtonProps } from "../FButton/types";
import { FDoubleTabsPanelProps } from "../FDoubleTabsPanel/types";

type FDoubleTabsContentType =
	| ReactElement<FDoubleTabsPanelProps>
	| Array<ReactElement<FDoubleTabsPanelProps>>;

export interface FDoubleTabsProps {
	/** Content under corresponding tab. */
	children?: FDoubleTabsContentType;
	/** If `true`, the tab is **NOT** allowed to use. */
	disabled?: boolean;
	/** Leading components in the tab header. */
	leadingComponents?: ReactNode;
	/** Action components in the tab header. */
	actionComponents?: ReactNode;
	/** Render user custom tab button. */
	customTabButton?: (
		isSelected: boolean,
		tabButtonProps: FButtonProps
	) => ReactNode;
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
	/** Properties of the tab button. */
	tabButtonProps?: FButtonProps;
	/** Style of the tab panel. */
	style?: CSSProperties;
	/** Class name of the tab panel. */
	className?: string;
}
