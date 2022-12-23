import { style } from "typestyle";
import { FReturnColor } from "..";

export const buttonContainer = (disabled: boolean, isHover: boolean) =>
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
		cursor: disabled ? "not-allowed" : "pointer",
		opacity: disabled ? 0.4 : 1,
	});
