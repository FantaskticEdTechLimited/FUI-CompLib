import * as styles from "./styles";
import React from "react";
import { FText } from "..";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FButtonProps } from "../global.types";

export const FTextButton = (props: FButtonProps) => {
	return (
		<div
			style={props.style}
			className={props.className + " " + styles.FTextButtonContainer(props)}
			onClick={() =>
				props.disabled ? undefined : props.onClick && props.onClick()
			}
		>
			{props.children ?? (
				<FText
					font={FFontTypes.Large_Text}
					color={FColorTypes.BLACK}
					style={props.labelStyle}
					className={props.labelClassName}
					children={props.label ?? "Button_Text"}
					{...props.labelProps}
				/>
			)}
		</div>
	);
};
