import React from "react";
import { FUseTheme } from "..";
import { handleFRadioButton } from "./func";
import * as styles from "./styles";
import { FRadioButtonProps } from "./types";

export const FRadioButton = (props: FRadioButtonProps) => {
	const checked = props.checked ?? true; //default checked
	const { theme } = FUseTheme();

	return (
		<svg
			style={props.containerStyle}
			className={styles.FRadioButtonDiv(props) + " " + props.containerClassName}
			onClick={() =>
				props.disabled ? undefined : props.onClick && props.onClick()
			}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{handleFRadioButton(props, checked, theme)}
		</svg>
	);
};
