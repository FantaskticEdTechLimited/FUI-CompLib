import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import React from "react";
import { FUseColor } from "../utils";
import * as styles from "./styles";
import { FTextProps } from "./types";

/** `<FText />` is a customized `Text` component.
 *
 * Props: `FTextProps`.
 */
export const FText = ({
	font = FFontTypes.Small_Title(),
	color = FUseColor({ colorName: "Black" }),
	overflowHidden = false,
	children = "Text",
	...props
}: FTextProps) => {
	const param: Partial<FTextProps> = {
		font: font,
		color: color,
		overflowHidden: overflowHidden,
		...props,
	};

	return (
		<div
			className={styles.FTextContainer(param) + " " + props.className}
			style={props.style}
			children={children}
		/>
	);
};
