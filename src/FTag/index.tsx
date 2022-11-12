import { FTagProps } from "./types";
import { FTagContainer } from "./styles";
import React from "react";
import { FText, FReturnColor } from "..";
import { FFontTypes } from "@innoplus-studio/fui-fontlib";
import { FIcon, FIconNames } from "@innoplus-studio/fui-iconlib";

/**
 * `<FTag />` is a component to show a tag
 * with a default remove icon (_works with `onDelete`_).
 *
 * Props: `FTagProps`.
 */
export const FTag = <T,>(props: FTagProps<T>) => {
	const mainThemeColor = FReturnColor({ color: "Main" });
	return (
		<div
			style={props.style}
			className={FTagContainer(props) + " " + props.className}
			onClick={() =>
				props.disabled ? undefined : props.onClick && props.onClick(props.tag)
			}
		>
			{props.leadingComponent}
			<FText
				font={FFontTypes.Text()}
				color={() => mainThemeColor}
				children={props.label}
				{...props.labelProps}
			/>
			{props.actionComponent
				? props.actionComponent
				: props.onDelete && (
						<FIcon
							size="small"
							name={FIconNames.CLOSE}
							color={() => mainThemeColor}
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
