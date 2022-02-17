import * as styles from "./styles";
import React from "react";
import { FText, FUseTheme } from "..";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FButtonProps, FButtonTypes } from "./types";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";

export const FButton = (props: FButtonProps) => {
	const { theme } = FUseTheme(); 
	return (
		<div
			style={props.style}
			className={props.className + " " + styles.FButtonContainer(props, theme)}
			onClick={() =>
				props.disabled ? undefined : props.onClick && props.onClick()
			}
		>
			{props.leadingComponents}
			{props.customChildren ? (
				props.customChildren
			) : (
				<FText
					font={FFontTypes.Text()}
					color={
						props.type === FButtonTypes.PRIMARY
							? FColorTypes.PRIMARY_WHITE
							: props.type === FButtonTypes.OUTLINE ||
							  props.type === FButtonTypes.SECONDARY
							? theme.mainThemeColor
							: FColorTypes.PRIMARY_BLACK
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
