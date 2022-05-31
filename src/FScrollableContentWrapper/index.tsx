import React from "react";
import { FScrollBarStyle } from "..";
import * as styles from "./styles";
import { FScrollableContentWrapperProps } from "./types";

export const FScrollableContentWrapper = (
	props: FScrollableContentWrapperProps
) => {
	return (
		<div
			style={props.style}
			className={
				styles.FScrollableContentWrapper +
				" " +
				props.className +
				" " +
				FScrollBarStyle({
					...props.scrollBarProps,
				})
			}
		>
			{props.children}
		</div>
	);
};
