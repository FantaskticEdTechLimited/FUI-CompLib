import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { style } from "typestyle";

export const FSearchBarContainer = (isTriggered: boolean) =>
	style({
		alignItems: "center",
		backgroundColor: FColorTypes.PURE_WHITE,
		border:
			"0.1rem solid " +
			(isTriggered ? FColorTypes.BRAND : FColorTypes.HARD_STROKE),
		borderRadius: "0.5rem",
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
	backgroundColor: FColorTypes.PURE_WHITE,
	border: "none",
	color: FColorTypes.BLACK,
	font: FFontTypes.Large_Text,
	outline: "none",
	overflow: "hidden",
	padding: 0,
	resize: "none",
	width: "100%",
	$nest: {
		"&::placeholder": {
			color: FColorTypes.GREY,
		},
	},
});
