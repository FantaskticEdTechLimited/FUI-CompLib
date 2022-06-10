import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { style } from "typestyle";
import { FTheme } from "../FThemeContext/types";

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
	theme: FTheme
) =>
	style({
		alignItems: "center",
		backgroundColor: FColorTypes.FPrimaryColors.WHITE,
		borderRadius: "0.5rem",
		border:
			"0.125rem solid " +
			(isTriggered
				? theme.mainThemeColor
				: isFilled
				? FColorTypes.FPrimaryColors.BLACK
				: FColorTypes.FPrimaryColors.BG_LIGHT),
		boxSizing: "border-box",
		caretColor: theme.mainThemeColor,
		columnGap: "0.5rem",
		display: "flex",
		flexDirection: "row",
		padding: "0.75rem",
	});

export const FEmailInputFieldInputAreaDiv = style({
	backgroundColor: FColorTypes.FPrimaryColors.WHITE,
	border: "none",
	color: FColorTypes.FPrimaryColors.BLACK,
	font: FFontTypes.Large_Text(),
	outline: "none",
	overflow: "hidden",
	padding: 0,
	resize: "none",
	width: "100%",
	$nest: {
		"&::placeholder": {
			color: FColorTypes.FPrimaryColors.GREY,
			font: FFontTypes.Large_Text(),
		},
	},
});
