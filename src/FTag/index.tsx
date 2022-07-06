import { FTagProps } from "./types";
import * as styles from "./styles";
import React from "react";
import { FText, FUseColor } from "..";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FIcon, FIconNames } from "@fantaskticedtechlimited/fui-iconlib";

export const FTag = <T,>(props: FTagProps<T>) => {
	const mainThemeColor = FUseColor({ colorName: "Main" });
	return (
		<div
			style={props.style}
			className={styles.FTagContainer(props) + " " + props.className}
			onClick={() =>
				props.disabled ? undefined : props.onClick && props.onClick(props.tag)
			}
		>
			{props.leadingComponents}
			<FText
				font={FFontTypes.Text()}
				color={mainThemeColor}
				style={props.labelStyle}
				className={styles.FTagLabel + " " + props.labelClassName}
				children={props.label}
				{...props.labelProps}
			/>
			{props.actionComponents
				? props.actionComponents
				: props.onDelete && (
						<FIcon
							size="small"
							name={FIconNames.CLOSE}
							strokeColor={mainThemeColor}
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
