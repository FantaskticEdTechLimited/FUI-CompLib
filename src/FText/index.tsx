import { FFontTypes } from "@innoplus-studio/fui-fontlib";
import React from "react";
import { FJoinClassNames } from "../utils/FJoinClassNames";
import { FReturnColor } from "../utils/FReturnColor";
import { textContainer } from "./styles";
import { FTextProps } from "./types";

/** `<FText />` is a customized `Text` component.
 *
 * Props: `FTextProps`.
 */
export const FText = (props: FTextProps) => {
	const {
		color = FReturnColor({ color: "Black" }),
		font = FFontTypes.Small_Title(),
		overflowHidden = false,
		maxRows,
		children = "Text",
		style,
		className,
	} = props;

	return (
		<div
			style={style}
			className={FJoinClassNames([
				textContainer({ color, font, overflowHidden, maxRows }),
				className,
			])}
		>
			{children}
		</div>
	);
};
