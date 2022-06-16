import { FUseColor } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { style } from "typestyle";
import { FCheckIsDarkMode } from "..";
import { FTextProps } from "./types";

export const FTextContainer = (props: FTextProps) =>
	style({
		color:
			props.color ??
			FUseColor({
				colorName: "Black",
				isDarkMode: FCheckIsDarkMode(),
			}),
		font: props.font ?? FFontTypes.Small_Title(),
		overflow: props.overflowHidden ? "hidden" : "visible",
		textOverflow: "ellipsis",
		whiteSpace: "pre-wrap",
		display: props.maxRows && props.maxRows > 0 ? "-webkit-box" : "block",
		"-webkit-line-clamp":
			props.maxRows && props.maxRows > 0 ? props.maxRows : undefined,
		WebkitBoxOrient: "vertical",
	});
