import { CSSProperties, ReactElement, ReactNode } from "react";
import { FButtonProps } from "../FButton/types";
import { FTabPanelProps } from "../FTabsPanel/types";

export interface FTabsProps {
	children?: ReactElement<FTabPanelProps> | Array<ReactElement<FTabPanelProps>>;
	disabled?: boolean;
	/** Leading components in the tab header. */
	leadingComponents?: ReactNode;
	/** Action components in the tab header. */
	actionComponents?: ReactNode;
	/** Render user custom tab button. */
	renderCustomizedTabButton?: (
		isSelected: boolean,
		buttonProps: FButtonProps
	) => ReactNode;
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
