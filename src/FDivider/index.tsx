import React from "react";
import { FJoinClassNames } from "../utils/FJoinClassNames";
import { dividerContainer } from "./styles";
import { FDividerProps } from "./types";

/**
 * `<FDivider />` is a component
 * which returns a horizontal (by default) or vertical divider.
 *
 * Props: `FDividerProps`.
 */
export const FDivider = (props: FDividerProps) => {
	const { style, className, vertical } = props;

	return (
		<div
			style={style}
			className={FJoinClassNames([dividerContainer(vertical!), className])}
		/>
	);
};
