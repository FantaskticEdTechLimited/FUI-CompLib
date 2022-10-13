import React from "react";
import { FDoubleTabsPanelProps } from "./types";

/** `<FDoubleTabsPanel />` is the content of `<FDoubleTabs />`.
 *
 * **Use with `<FDoubleTabs />`** for the header of the panel.
 *
 * Props: `FDoubleTabsPanelProps`.
 *
 *  */
export const FDoubleTabsPanel = ({
	isRenderOnSelected = true,
	...props
}: FDoubleTabsPanelProps) => {
	return (
		<div style={props.style} className={props.className}>
			{props.children}
		</div>
	);
};
