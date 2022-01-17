import React from "react";
import { FTextProps } from "../global.types";
import * as styles from "./styles";

export const FText = (props: FTextProps) => {
	return (
		<div
			className={props.className + " " + styles.FTextContainer(props)}
			style={props.style}
			children={props.children ?? "Text"}
		/>
	);
};
