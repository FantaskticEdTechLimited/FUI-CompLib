import React from "react";
import * as styles from "./styles";
import { FSVGButtonProps } from "./types";

export const FSVGButton = (props: FSVGButtonProps) => {
	return (
		<div
			style={props.style}
			className={props.className + " " + styles.FSVGButtonDiv(props)}
			onClick={() => (props.disabled ? undefined : props.onClick())}
		>
			{props.children}
		</div>
	);
};
