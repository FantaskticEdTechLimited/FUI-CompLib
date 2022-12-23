import { FFontTypes } from "@innoplus-studio/fui-fontlib";
import { style } from "typestyle";
import { FReturnColor } from "..";

export const inputFieldContainer = (
	isTriggered: boolean,
	isFilled: boolean,
	disabled: boolean
) =>
	style({
		display: "flex",
		flexDirection: "row",
		columnGap: "8px",
		alignItems: "center",
		boxSizing: "border-box",
		padding: "12px",
		borderRadius: "4px",
		border:
			"2px solid " +
			(isTriggered
				? FReturnColor({ color: "Main" })
				: isFilled
				? FReturnColor({ color: "Black" })
				: FReturnColor({ color: "BG Light" })),
		opacity: disabled ? 0.4 : 1,
		cursor: disabled ? "not-allowed" : "text",
	});

export const inputAreaDiv = (disabled: boolean) =>
	style({
		backgroundColor: "inherit",
		border: "none",
		color: FReturnColor({ color: "Black" }),
		font: FFontTypes.Large_Text(),
		outline: "none",
		overflow: "hidden",
		padding: 0,
		resize: "none",
		width: "100%",
		cursor: disabled ? "not-allowed" : "text",
		$nest: {
			"&::placeholder": {
				color: FReturnColor({ color: "Grey" }),
				font: FFontTypes.Large_Text(),
			},
		},
	});
