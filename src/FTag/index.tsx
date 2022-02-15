import { FTagProps } from "./types";
import * as styles from "./styles";
import React from "react";
import { FText } from "..";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";

import { FIcon, FIconTypes } from "@fantaskticedtechlimited/fui-iconlib"; 
import { defaultThemeProps } from "../global.types";

export const FTag = <T extends unknown>(props: FTagProps<T>) => {
	return (
		<div
			style={props.style}
			className={props.className + " " + styles.FTagContainer(props)}
			onClick={() =>
				props.disabled ? undefined : props.onClick && props.onClick(props.tag)
			}
		>
			{props.leadingComponents}
			<FText
				font={FFontTypes.Text()}
				color={props.themeProps?.mainTheme ?? defaultThemeProps.mainTheme}
				style={props.labelStyle}
				className={props.labelClassName + " " + styles.FTagLabel}
				children={props.label}
				{...props.labelProps}
			/>
			{props.actionComponents
				? props.actionComponents
				: props.onDelete && (
						<FIcon
							size="small"
							name={FIconTypes.CLOSE}
							strokeColor={
								props.themeProps?.mainTheme ?? defaultThemeProps.mainTheme
							}
							onClick={() =>
								props.disabled ? undefined : props.onDelete && props.onDelete(props.tag)
							}
							{...props.deleteIconProps}
						/>
				  )}
		</div>
	);
};
