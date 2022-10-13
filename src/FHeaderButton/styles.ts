import { style } from "typestyle";
import { FReturnColor } from "..";
import { FHeaderButtonProps } from "./types";

export const FHeaderButtonContainer = (
	props: FHeaderButtonProps,
	isHover: boolean
) =>
	style({
		display: "flex",
		alignItems: "center",
		width: "fit-content",
		backgroundColor: isHover
			? FReturnColor({ color: "Main" })
			: FReturnColor({ color: "Sub" }),
		borderRadius: "4px",
		boxSizing: "border-box",
		padding: "8px",
		cursor: props.disabled ? "not-allowed" : "pointer",
		opacity: props.disabled ? 0.4 : 1,
	});
