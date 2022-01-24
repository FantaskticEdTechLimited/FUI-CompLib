import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { style } from "typestyle";

export const FPasswordInputFieldContainer = (
	isTriggered: boolean,
	isFilled: boolean,
	disabled: boolean
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
				? FColorTypes.BRAND
				: isFilled
				? FColorTypes.PRIMARY_BLACK
				: FColorTypes.PRIMARY_LIGHT),
		opacity: disabled ? 0.4 : 1,
		cursor: disabled ? "not-allowed" : "text",
	});

export const FPasswordInputFieldInputAreaDiv = (disabled: boolean) =>
	style({
		backgroundColor: "inherit",
		border: "none",
		color: FColorTypes.PRIMARY_BLACK,
		font: FFontTypes.Large_Text(),
		outline: "none",
		overflow: "hidden",
		padding: 0,
		resize: "none",
		width: "100%",
		cursor: disabled ? "not-allowed" : "text",
		$nest: {
			"&::placeholder": {
				color: FColorTypes.PRIMARY_GREY,
				font: FFontTypes.Large_Text(),
			},
		},
	});
