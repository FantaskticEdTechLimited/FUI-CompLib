import * as styles from "./styles";
import React from "react";
import { FCheckIsDarkMode, FGetThemeColor, FText } from "..";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FButtonProps, FButtonTypes } from "./types";
import { FUseColor } from "@fantaskticedtechlimited/fui-colorlib";

export const FButton = (props: FButtonProps) => {
	return (
		<div
			style={props.style}
			className={styles.FButtonContainer(props) + " " + props.className}
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
							? FUseColor({
									colorName: "White",
									isDarkMode: FCheckIsDarkMode(),
							  })
							: props.type === FButtonTypes.OUTLINE ||
							  props.type === FButtonTypes.SECONDARY
							? FGetThemeColor("Main")
							: FUseColor({
									colorName: "Black",
									isDarkMode: FCheckIsDarkMode(),
							  })
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
