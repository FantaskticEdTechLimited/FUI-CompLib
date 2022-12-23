import { ReactElement, ReactNode } from "react";
import { FButtonProps } from "../FButton/types";
import { FDoubleTabsPanelProps } from "../FDoubleTabsPanel/types";
import { PropsWithCustomStyle } from "../global.types";

export type FDoubleTabsProps = {
	/** Content under corresponding tab. */
	children?:
		| ReactElement<FDoubleTabsPanelProps>
		| Array<ReactElement<FDoubleTabsPanelProps>>;
	/** If `true`, the tab is **NOT** allowed to use. */
	disabled?: boolean;
	/** Leading components in the tab header. */
	leadingComponents?: ReactNode;
	/** Action components in the tab header. */
	actionComponents?: ReactNode;
	/** Class name of the wrapper. */
	wrapperClassName?: PropsWithCustomStyle["className"];
	/** Style of the wrapper. */
	wrapperStyle?: PropsWithCustomStyle["style"];
	/** Class name of the tab header. */
	headerClassName?: PropsWithCustomStyle["className"];
	/** Style of the tab header. */
	headerStyle?: PropsWithCustomStyle["style"];
	/** Class name of the tab button. */
	tabContainerClassName?: PropsWithCustomStyle["className"];
	/** Style of the tab button. */
	tabContainerStyle?: PropsWithCustomStyle["style"];
	/** Properties of the tab button. */
	tabButtonProps?: FButtonProps;
};
