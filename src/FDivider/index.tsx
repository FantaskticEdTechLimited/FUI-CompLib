import React from "react";
import { FDivider_Container } from "./styles";
import { FDividerProps } from "./types";

/**
 * `<FDivider />` is a component
 * which returns a horizontal (by default) or vertical divider.
 *
 * Props: `FDividerProps`.
 */
export const FDivider = (props: FDividerProps) => {
	return (
		<div
			style={props.style}
			className={FDivider_Container(props.vertical!) + " " + props.className}
		/>
	);
};
