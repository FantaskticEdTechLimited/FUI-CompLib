import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { style } from "typestyle";
import { FTheme } from ".."; 

export const FSearchBarContainer = (
	isTriggered: boolean, 
	theme: FTheme
) =>
	style({
		alignItems: "center",
		backgroundColor: theme.subThemeColor,
		border:
			"0.125rem solid " +
			(isTriggered
				? theme.mainThemeColor
				: "none"),
		borderRadius: "0.25rem",
		boxSizing: "border-box",
		caretColor: theme.mainThemeColor,
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
	font: FFontTypes.Large_Text(),
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
