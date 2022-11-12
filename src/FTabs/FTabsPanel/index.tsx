import React from "react";
import { FTabsPanelProps } from "./types";

export const FTabsPanel = (props: FTabsPanelProps) => {
	const { children, style, className } = props;
	return (
		<div style={style} className={className}>
			{children}
		</div>
	);
};
