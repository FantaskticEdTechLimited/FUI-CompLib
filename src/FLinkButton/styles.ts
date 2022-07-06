import { style } from "typestyle";
import { FUseColor } from "..";
import { FLinkButtonProps } from "./types";

export const FLinkButtonContainer = (
	isSelected: boolean,
	props: FLinkButtonProps
) =>
	style({
		alignItems: "center",
		backgroundColor: isSelected
			? FUseColor({ colorName: "Main" })
			: FUseColor({
					colorName: "White",
			  }),
		border: "none",
		borderRadius: "0.25rem",
		boxSizing: "border-box",
		columnGap: "0.5rem",
		cursor: props.disabled ? "not-allowed" : "pointer",
		display: "flex",
		flexDirection: "row",
		padding: "0.75rem 0.75rem",
		textDecoration: "none",
	});

export const FLinkButtonLabel = style({
	flexGrow: 1,
});
