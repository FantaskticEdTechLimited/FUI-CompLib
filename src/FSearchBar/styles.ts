import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { style } from "typestyle";

export const FSearchBarContainer = (isTriggered: boolean) =>
	style({
		alignItems: "center",
		backgroundColor: FColorTypes.BRAND_BG,
		border: "0.125rem solid " + (isTriggered ? FColorTypes.BRAND : "none"),
		borderRadius: "0.25rem",
		boxSizing: "border-box",
		caretColor: FColorTypes.BRAND,
		columnGap: "0.5rem",
		cursor: "text",
		display: "flex",
		flexDirection: "row",
		padding: "0.75rem",
		width: "100%",
	});

export const FSearchBarInputAreaDiv = style({
	backgroundColor: "inherit",
	border: "none",
	color: FColorTypes.PRIMARY_BLACK,
	font: FFontTypes.Large_Text,
	outline: "none",
	overflow: "hidden",
	padding: 0,
	resize: "none",
	width: "100%",
	$nest: {
		"&::placeholder": {
			color: FColorTypes.PRIMARY_GREY,
		},
	},
});
