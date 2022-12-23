import React from "react";
import { FScrollBarStyle } from "../FScrollBarStyle";
import { FJoinClassNames } from "../utils/FJoinClassNames";
import { scrollableContainer } from "./styles";
import { FScrollableContainerProps } from "./types";

/** `<FScrollableContainer />` is a container which is scrollable using `FScrollBarStyle`.
 * It can be scrolled horizontally or vertically (default).
 *
 * Props: `FScrollableContainerProps`.
 */
export const FScrollableContainer = (props: FScrollableContainerProps) => {
	const { horizontal = false, style, className, children } = props;

	return (
		<div
			style={style}
			className={FJoinClassNames([
				scrollableContainer(horizontal),
				className,
				FScrollBarStyle(),
			])}
		>
			{children}
		</div>
	);
};
