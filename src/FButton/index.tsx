import * as styles from "./styles";
import React from "react";
import { FText } from "..";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FButtonProps, FButtonTypes } from "./types";

export const FButton = (props: FButtonProps) => {
	return (
		<div
			style={props.style}
			className={props.className + " " + styles.FButtonContainer(props)}
			onClick={() =>
				props.disabled ? undefined : props.onClick && props.onClick()
			}
		>
			{props.leadingComponents}
			{props.children ? (
				props.children
			) : (
				<FText
					font={FFontTypes.Large_Text}
					color={
						props.type === FButtonTypes.PRIMARY
							? FColorTypes.PURE_WHITE
							: props.type === FButtonTypes.OUTLINE ||
							  props.type === FButtonTypes.SECONDARY
							? FColorTypes.BRAND
							: FColorTypes.BLACK
					}
					style={props.labelStyle}
					className={props.labelClassName}
					children={props.label ?? "Button_Text"}
					{...props.labelProps}
				/>
			)}

			{props.actionComponents}
		</div>
	);
};
