import { FPrimaryButtonProps } from "./types";
import * as styles from "./styles";
import React from "react";
import { FText } from "..";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";

export const FPrimaryButton = (props: FPrimaryButtonProps) => {
	return (
		<div
			style={props.style}
			className={props.className + " " + styles.FPrimaryButtonContainer(props)}
			onClick={() => props.disabled ? undefined : props.onClick()}
		>
			{
				props.children ??
				<FText
					font={FFontTypes.Large_Text}
					color={FColorTypes.PURE_WHITE}
					style={props.textStyle}
					className={props.textClassName}
					children={props.label}
				/>
			}
		</div>
	);
};
