import React from "react";
import { handleFRadioButton } from "./func";
import * as styles from "./styles";
import { FRadioButtonProps } from "./types";

export const FRadioButton = (props: FRadioButtonProps) => {
	return (
		<svg
			style={props.containerStyle}
			className={props.containerClassName + " " + styles.FRadioButtonDiv(props)}
			onClick={() => (props.disabled ? undefined : props.onClick())}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{handleFRadioButton(props)}
		</svg>
	);
};
