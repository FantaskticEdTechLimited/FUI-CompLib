import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { style } from "typestyle";
import { defaultThemeProps, ThemeProps } from "../global.types";

export const FEmailInputFieldWrapper = (isError: boolean, disabled: boolean) =>
	style({
		display: "flex",
		flexDirection: "column",
		rowGap: isError ? "0.25rem" : 0,
		opacity: disabled ? 0.4 : 1,
		cursor: disabled ? "not-allowed" : "text",
	});

export const FEmailInputFieldContainer = (
	isTriggered: boolean,
	isFilled: boolean,
	theme: ThemeProps
) =>
	style({
		alignItems: "center",
		backgroundColor: FColorTypes.PRIMARY_WHITE,
		borderRadius: "0.5rem",
		border:
			"0.125rem solid " +
			(isTriggered
				? theme.mainTheme ?? defaultThemeProps.mainTheme
				: isFilled
				? FColorTypes.PRIMARY_BLACK
				: FColorTypes.PRIMARY_LIGHT),
		boxSizing: "border-box",
		caretColor: theme.mainTheme ?? defaultThemeProps.mainTheme,
		columnGap: "0.5rem",
		display: "flex",
		flexDirection: "row",
		padding: "0.75rem",
	});

export const FEmailInputFieldInputAreaDiv = style({
	backgroundColor: FColorTypes.PRIMARY_WHITE,
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
			font: FFontTypes.Large_Text(),
		},
	},
});
