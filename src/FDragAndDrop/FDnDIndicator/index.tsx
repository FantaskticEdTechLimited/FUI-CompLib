import React from "react";
import { styles } from "./styles";
import { FDnDIndicatorProps } from "./types";

/** A default horizontal indicator will be shown on top or bottom of the hovered item. */
export const FDnDIndicator = (props: FDnDIndicatorProps) => {
	return (
		<div
			style={props.style}
			className={styles.FDnDIndicator_Container + " " + props.className}
		/>
	);
};
