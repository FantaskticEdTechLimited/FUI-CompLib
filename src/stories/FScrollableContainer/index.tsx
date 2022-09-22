import React from "react";
import { FScrollBarStyle } from "../../FScrollBarStyle";
import { FScrollableContainerProps } from "./types";

/** `<FScrollableContainer />` is an example to show a component using `FScrollBarStyle`.
 *
 * Thus, it is temporarily **NOT** included in `FUI-CompLib`. */
export const FScrollableContainer = ({
	horizontal = false,
	...props
}: FScrollableContainerProps) => {
	return (
		<div
			style={{
				width: horizontal ? "100%" : "500px",
				height: horizontal ? "150px" : "100px",
				overflow: "auto",
			}}
			className={FScrollBarStyle()}
		>
			{props.children}
		</div>
	);
};
