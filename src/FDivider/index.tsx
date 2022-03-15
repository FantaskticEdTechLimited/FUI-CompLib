import React from "react";
import * as styles from "./styles";
import { FDividerProps } from "./types";

export const FDivider = (props: FDividerProps) => {
	return (
		<div
			style={props.style}
			className={
				styles.FDivider_Container(props.vertical!) + " " + props.className
			}
		/>
	);
};
