import React from "react";
import { FScrollBarStyle } from "../FScrollBarStyle";
import { FScrollableContainer_Container } from "./styles";
import { FScrollableContainerProps } from "./types";

/** `<FScrollableContainer />` is a container which is scrollable using `FScrollBarStyle`.
 * It can be scrolled horizontally or vertically (default).
 *
 * Props: `FScrollableContainerProps`.
 */
export const FScrollableContainer = ({
	horizontal = false,
	...props
}: FScrollableContainerProps) => {
	return (
		<div
			style={props.style}
			className={
				FScrollableContainer_Container(horizontal) +
				" " +
				props.className +
				" " +
				FScrollBarStyle()
			}
		>
			{props.children}
		</div>
	);
};
