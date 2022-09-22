import React from "react";
import { FTabPanelProps } from "./types";

/** `<FTabsPanel />` is the content of `<FTabs />`.
 *
 * **Use with `<FTabs />`** for the header of the panel.
 *
 * Props: `FTabPanelProps`.
 *
 *  */
export const FTabsPanel = ({
	isRenderOnSelected = true,
	...props
}: FTabPanelProps) => {
	return (
		<div style={props.style} className={props.className}>
			{props.children}
		</div>
	);
};
