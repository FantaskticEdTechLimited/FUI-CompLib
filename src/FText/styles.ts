import { style } from "typestyle";
import { FTextProps } from "./types";

export const FTextContainer = (props: FTextProps) =>
	style({
		color: props.color,
		font: props.font,
		overflow: "hidden",
		textOverflow: "ellipsis",
		display: props.maxRows && props.maxRows > 0 ? "-webkit-box" : "block",
		"-webkit-line-clamp":
			props.maxRows && props.maxRows > 0 ? props.maxRows : undefined,
		WebkitBoxOrient: "vertical",
	});
