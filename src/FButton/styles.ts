import { style } from "typestyle";
import { FReturnColor } from "..";
import { FButtonTypes } from "./types";

export const buttonContainer = (
	type: FButtonTypes,
	disabled: boolean,
	isHover: boolean
) =>
	style({
		alignItems: "center",
		backgroundColor:
			!disabled && isHover
				? type === "text"
					? undefined
					: FReturnColor({ color: "Main" })
				: type === "primary"
				? FReturnColor({ color: "Main" })
				: type === "secondary"
				? FReturnColor({ color: "Sub" })
				: FReturnColor({ color: "White" }),
		borderRadius: "4px",
		border:
			type === "outline"
				? "2px solid " + FReturnColor({ color: "Main" })
				: "none",
		cursor: disabled ? "not-allowed" : "pointer",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		opacity:
			!disabled && isHover
				? type === "primary"
					? 0.8
					: 1
				: disabled
				? 0.4
				: 1,
		padding: "12px 16px",
	});
