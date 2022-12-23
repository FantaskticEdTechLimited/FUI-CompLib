import { FFontTypes } from "@innoplus-studio/fui-fontlib";
import { style } from "typestyle";
import { FReturnColor } from "..";

export const emailInputFieldWrapper = (isError: boolean, disabled: boolean) =>
	style({
		display: "flex",
		flexDirection: "column",
		rowGap: isError ? "4px" : 0,
		opacity: disabled ? 0.4 : 1,
		cursor: disabled ? "not-allowed" : "text",
	});

export const emailInputFieldContainer = (
	isTriggered: boolean,
	isFilled: boolean
) =>
	style({
		alignItems: "center",
		backgroundColor: FReturnColor({ color: "White" }),
		borderRadius: "8px",
		border:
			"2px solid " +
			(isTriggered
				? FReturnColor({ color: "Main" })
				: isFilled
				? FReturnColor({ color: "Black" })
				: FReturnColor({ color: "BG Light" })),
		boxSizing: "border-box",
		caretColor: FReturnColor({ color: "Main" }),
		columnGap: "8px",
		display: "flex",
		flexDirection: "row",
		padding: "12px",
	});

export const inputAreaDiv = () =>
	style({
		backgroundColor: FReturnColor({ color: "White" }),
		border: "none",
		color: FReturnColor({ color: "Black" }),
		font: FFontTypes.Large_Text(),
		outline: "none",
		overflow: "hidden",
		padding: 0,
		resize: "none",
		width: "100%",
		$nest: {
			"&::placeholder": {
				color: FReturnColor({ color: "Grey" }),
				font: FFontTypes.Large_Text(),
			},
		},
	});
