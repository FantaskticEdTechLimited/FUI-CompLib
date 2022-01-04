import React from "react";
import * as styles from "./styles";
import { FTextProps } from "./types";

export const FText = (props: FTextProps) => {
	return (
		<div
			className={props.className + " " + styles.FTextContainer(props)}
			style={props.style}
		>
			{props.children}
		</div>
	);
};
