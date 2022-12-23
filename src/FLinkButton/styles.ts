import { style } from "typestyle";
import { FReturnColor } from "..";

export const linkButtonContainer = (disabled: boolean, isSelected?: boolean) =>
	style({
		alignItems: "center",
		backgroundColor: isSelected
			? FReturnColor({ color: "Main" })
			: FReturnColor({ color: "White" }),
		border: "none",
		borderRadius: "4px",
		boxSizing: "border-box",
		columnGap: "8px",
		cursor: disabled ? "not-allowed" : "pointer",
		display: "flex",
		flexDirection: "row",
		padding: "12px 12px",
		textDecoration: "none",
	});
