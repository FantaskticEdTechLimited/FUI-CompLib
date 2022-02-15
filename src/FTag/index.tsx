import { FTagProps } from "./types";
import * as styles from "./styles";
import React from "react";
import { FText, FUseTheme } from "..";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FIcon, FIconTypes } from "@fantaskticedtechlimited/fui-iconlib";

export const FTag = <T extends unknown>(props: FTagProps<T>) => {
	const { theme } = FUseTheme();
	return (
		<div
			style={props.style}
			className={props.className + " " + styles.FTagContainer(props, theme)}
			onClick={() =>
				props.disabled ? undefined : props.onClick && props.onClick(props.tag)
			}
		>
			{props.leadingComponents}
			<FText
				font={FFontTypes.Text()}
				color={theme.mainThemeColor}
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
							strokeColor={theme.mainThemeColor}
							onClick={() =>
								props.disabled
									? undefined
									: props.onDelete && props.onDelete(props.tag)
							}
							{...props.deleteIconProps}
						/>
				  )}
		</div>
	);
};
