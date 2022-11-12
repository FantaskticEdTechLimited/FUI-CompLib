import { style } from "typestyle";
import { FReturnColor } from "..";
import { FLinkButtonProps } from "./types";

export const FLinkButtonContainer = (
	isSelected: boolean,
	props: FLinkButtonProps
) =>
	style({
		alignItems: "center",
		backgroundColor: isSelected
			? FReturnColor({ color: "Main" })
			: FReturnColor({
					color: "White",
			  }),
		border: "none",
		borderRadius: "4px",
		boxSizing: "border-box",
		columnGap: "8px",
		cursor: props.disabled ? "not-allowed" : "pointer",
		display: "flex",
		flexDirection: "row",
		padding: "12px 12px",
		textDecoration: "none",
	});
 
