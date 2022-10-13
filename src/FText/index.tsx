import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import React, { useState } from "react";
import { FReturnColor } from "../utils/FReturnColor";
import * as styles from "./styles";
import { FTextProps } from "./types";

/** `<FText />` is a customized `Text` component.
 *
 * Props: `FTextProps`.
 */
export const FText = ({
	font = FFontTypes.Small_Title(),
	overflowHidden = false,
	children = "Text",
	...props
}: FTextProps) => {
	const [isHover, setIsHover] = useState<boolean>(false);
	const color = (isHover: boolean) =>
		props.color ? props.color(isHover) : FReturnColor({ color: "Black" });
	const param: Partial<FTextProps> = {
		font: font,
		color: color,
		overflowHidden: overflowHidden,
		...props,
	};

	return (
		<div
			style={props.style && props.style(isHover)}
			className={
				styles.FTextContainer(param) +
				" " +
				(props.className && props.className(isHover))
			}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			children={children}
		/>
	);
};
