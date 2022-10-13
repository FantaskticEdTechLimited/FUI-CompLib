import { style } from "typestyle";
import { FTextProps } from "./types";

export const FTextContainer = (props: FTextProps) =>
	style({
		color: props.color && props.color(),
		font: props.font,
		overflow: props.overflowHidden ? "hidden" : "visible",
		textOverflow: "ellipsis",
		whiteSpace: "pre-wrap",
		display: props.maxRows && props.maxRows > 0 ? "-webkit-box" : "block",
		"-webkit-line-clamp":
			props.maxRows && props.maxRows > 0 ? props.maxRows : undefined,
		WebkitBoxOrient: "vertical",
	});
