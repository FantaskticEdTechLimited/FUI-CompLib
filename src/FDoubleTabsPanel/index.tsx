import React from "react";
import { FDoubleTabsPanelProps } from "./types";

/** `<FDoubleTabsPanel />` is the content of `<FDoubleTabs />`.
 *
 * **Use with `<FDoubleTabs />`** for the header of the panel.
 *
 * Props: `FDoubleTabsPanelProps`.
 *
 *  */
export const FDoubleTabsPanel = (props: FDoubleTabsPanelProps) => {
	const { style, className, children } = props;
	return (
		<div style={style} className={className}>
			{children}
		</div>
	);
};
