import React from "react";
import * as styles from "./styles";
import { FTextProps } from "./types";

export const FText = (props: FTextProps) => {
	return (
		<div
			className={styles.FTextContainer(props) + " " + props.className}
			style={props.style}
			children={props.children ?? "Text"}
		/>
	);
};
