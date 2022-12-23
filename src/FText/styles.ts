import { style } from "typestyle";
import { FTextProps } from "./types";

export const textContainer = (props: FTextProps) => {
	const { color, font, overflowHidden, maxRows } = props;

	return style({
		color: color,
		font: font,
		overflow: overflowHidden ? "hidden" : "visible",
		textOverflow: "ellipsis",
		whiteSpace: "pre-wrap",
		display: maxRows && maxRows > 0 ? "-webkit-box" : "block",
		"-webkit-line-clamp": maxRows && maxRows > 0 ? maxRows : undefined,
		WebkitBoxOrient: "vertical",
	});
};
