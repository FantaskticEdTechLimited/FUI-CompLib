import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { style } from "typestyle";
import { FTheme } from "../FThemeContext/types";
import { FPasswordInputFieldProps } from "./types";

export const FPasswordInputFieldContainer = (
	isTriggered: boolean,
	isFilled: boolean,
	props: FPasswordInputFieldProps,
	theme: FTheme
) =>
	style({
		display: "flex",
		flexDirection: "row",
		columnGap: "0.5rem",
		alignItems: "center",
		boxSizing: "border-box",
		padding: "0.75rem",
		borderRadius: "0.25rem",
		border:
			"0.125rem solid " +
			(isTriggered
				? theme.mainThemeColor
				: isFilled
				? FColorTypes.FPrimaryColors.BLACK
				: FColorTypes.FPrimaryColors.BG_LIGHT),
		opacity: props.disabled ? 0.4 : 1,
		cursor: props.disabled ? "not-allowed" : "text",
	});

export const FPasswordInputFieldInputAreaDiv = (disabled: boolean) =>
	style({
		backgroundColor: "inherit",
		border: "none",
		color: FColorTypes.FPrimaryColors.BLACK,
		font: FFontTypes.Large_Text(),
		outline: "none",
		overflow: "hidden",
		padding: 0,
		resize: "none",
		width: "100%",
		cursor: disabled ? "not-allowed" : "text",
		$nest: {
			"&::placeholder": {
				color: FColorTypes.FPrimaryColors.GREY,
				font: FFontTypes.Large_Text(),
			},
		},
	});
