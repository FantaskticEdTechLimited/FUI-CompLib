import React from "react";
import * as styles from "./styles";
import { FSVGIconProps } from "./types";

export const FSVGIcon = (props: FSVGIconProps) => {
	return (
		<div
			style={props.style}
			className={styles.FSVGIconDiv(props) + " " + props.className}
			onClick={() =>
				props.disabled ? undefined : props.onClick && props.onClick()
			}
		>
			{props.children}
		</div>
	);
};
