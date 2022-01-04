import React from "react";
import { handleFCheckBox } from "./func";
import * as styles from "./styles";
import { FCheckBoxProps } from "./types";

export const FCheckBox = (props: FCheckBoxProps) => {
	return (
		<svg
			style={props.containerStyle}
			className={props.containerClassName + " " + styles.FCheckBoxDiv(props)}
			onClick={() => (props.disabled ? undefined : props.onClick())}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{handleFCheckBox(props)}
		</svg>
	);
};
