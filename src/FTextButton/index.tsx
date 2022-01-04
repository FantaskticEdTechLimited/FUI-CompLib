import { FTextButtonProps } from "./types";
import * as styles from "./styles";
import React from "react";
import { FText } from "..";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";

export const FTextButton = (props: FTextButtonProps) => {
	return (
		<div
			style={props.style}
			className={props.className + " " + styles.FTextButtonContainer(props)}
			onClick={() => (props.disabled ? undefined : props.onClick())}
		>
		{
			props.children ??
			<FText
				font={FFontTypes.Large_Text}
				color={FColorTypes.BLACK}
				style={props.textStyle}
				className={props.textClassName}
				children={props.label}
			/>
		}
		</div>
	);
};
