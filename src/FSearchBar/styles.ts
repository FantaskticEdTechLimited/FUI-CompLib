import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { style } from "typestyle";
import { defaultThemeProps } from "../global.types";
import { FSearchBarProps } from "./types";

export const FSearchBarContainer = (isTriggered: boolean, props: FSearchBarProps) =>
	style({
		alignItems: "center",
		backgroundColor: props.themeProps?.subTheme ?? defaultThemeProps.subTheme,
		border:
			"0.125rem solid " + (isTriggered ? props.themeProps?.mainTheme ?? defaultThemeProps.mainTheme : "none"),
		borderRadius: "0.25rem",
		boxSizing: "border-box",
		caretColor: props.themeProps?.mainTheme ?? defaultThemeProps.mainTheme,
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
