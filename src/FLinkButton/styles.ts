import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";

export const FLinkButtonContainer = (isSelected: boolean, disabled: boolean) =>
	style({
		alignItems: "center",
		backgroundColor: isSelected
			? FColorTypes.PURPLE_BG
			: FColorTypes.PURE_WHITE,
		border: "none",
		borderRadius: "0.25rem",
		boxSizing: "border-box",
		columnGap: "0.5rem",
		cursor: disabled ? "not-allowed" : "pointer",
		display: "flex",
		flexDirection: "row",
		padding: "0.75rem 0.75rem",
		textDecoration: "none",
	});

export const FLinkButtonLabel = style({
	flexGrow: 1,
});
