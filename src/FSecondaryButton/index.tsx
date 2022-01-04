import { FSecondaryButtonProps } from "./types";
import * as styles from "./styles";
import React from "react";
import { FText } from "..";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";

export const FSecondaryButton = (props: FSecondaryButtonProps) => {
	return (
		<div
			style={props.style}
			className={props.className + " " + styles.FSecondaryButtonContainer(props)}
			onClick={() => props.disabled ? undefined : props.onClick()}
		>
		{
			props.children ??
			<FText
				font={FFontTypes.Large_Text}
				color={FColorTypes.BRAND}
				style={props.textStyle}
				className={props.textClassName}
				children={props.label}
			/>
		}
		</div>
	);
};
