import { style } from "typestyle";
import { FReturnColor } from "..";

export const tagContainer = (disabled?: boolean) =>
	style({
		alignItems: "center",
		backgroundColor: FReturnColor({ color: "Sub" }),
		borderRadius: "2px",
		boxSizing: "border-box",
		columnGap: "4px",
		cursor: disabled ? "not-allowed" : "pointer",
		display: "flex",
		opacity: disabled ? 0.4 : 1,
		padding: "4px 8px",
		width: "fit-content",
	});
