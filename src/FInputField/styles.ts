import { style } from "typestyle";
import { FInputFieldProps } from "./types";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FTheme } from "../FThemeContext/types";

export const FInputFieldContainer = (props: FInputFieldProps) =>
	style({
		display: "flex",
		flexDirection: "column",
		rowGap: props.wordCount ? "0.25rem" : 0,
		width: "100%",
	});

export const FInputFieldDiv = (
	props: FInputFieldProps,
	isTriggered: boolean,
	isFilled: boolean,
	theme: FTheme
) =>
	style({
		backgroundColor: FColorTypes.FPrimaryColors.WHITE,
		borderRadius: "0.5rem",
		border:
			"0.1rem solid " +
			(isTriggered
				? theme.mainThemeColor
				: isFilled
				? FColorTypes.FPrimaryColors.BLACK
				: FColorTypes.FPrimaryColors.BG_LIGHT),
		boxSizing: "border-box",
		caretColor: theme.mainThemeColor,
		cursor: props.disabled ? "not-allowed" : "text",
		display: "flex",
		flexDirection: "column",
		justifyContent: props.multiline ? undefined : "center",
		minHeight: props.multiline ? "7rem" : "3.5rem",
		padding:
			isTriggered || isFilled ? "0.25rem 0.25rem 0.25rem 0.75rem" : "0.75rem",
		transition: "all 0.2s ease-in-out",
	});

export const FInputFieldInputAreaDiv = (
	props: FInputFieldProps,
	state: boolean
) =>
	style({
		backgroundColor: FColorTypes.FPrimaryColors.WHITE,
		border: "none",
		color: FColorTypes.FPrimaryColors.BLACK,
		display: state ? "block" : "none",
		font: props.multiline ? FFontTypes.Small_Title() : FFontTypes.Large_Text(),
		outline: "none",
		overflowX: "hidden",
		overflowY: "auto",
		padding: 0,
		resize: "none",
		width: "100%",
		wordBreak: "break-all",
		$nest: {
			"&::placeholder": {
				color: FColorTypes.FPrimaryColors.BG_LIGHT,
			},
		},
	});

export const FInputFieldWordCountDiv = style({
	textAlign: "right",
});
