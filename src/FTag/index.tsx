import { FTagProps } from "./types";
import * as styles from "./styles";
import React from "react";
import { FText } from "..";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FIcon, FIconTypes } from "@fantaskticedtechlimited/fui-iconlib"; 

export const FTag = (props: FTagProps<any>) => {
	return (
		<div
			style={props.style}
			className={props.className + " " + styles.FTagContainer(props)}
			onClick={() =>
				props.disabled ? undefined : props.onClick && props.onClick()
			}
		>
			{props.leadingComponents}
			<FText
				font={FFontTypes.Text}
				color={FColorTypes.BRAND}
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
							strokeColor={FColorTypes.BRAND}
							onClick={() =>
								props.disabled
									? undefined
									: props.onDelete && props.onDelete(props.tagId)
							}
							{...props.deleteIconProps}
						/>
				  )}
		</div>
	);
};
