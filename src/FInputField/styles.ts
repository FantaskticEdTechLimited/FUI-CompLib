import { style } from "typestyle";
import { FFontTypes } from "@innoplus-studio/fui-fontlib";
import { FReturnColor } from "..";

export const inputFieldContainer = (hasWordCount?: boolean) =>
	style({
		display: "flex",
		flexDirection: "column",
		rowGap: hasWordCount ? "4px" : 0,
		width: "100%",
	});

export const inputFieldDiv = (
	isTriggered: boolean,
	isFilled: boolean,
	disabled: boolean,
	multiline: boolean
) =>
	style({
		backgroundColor: FReturnColor({ color: "White" }),
		borderRadius: "8px",
		border:
			"1.6px solid " +
			(isTriggered
				? FReturnColor({ color: "Main" })
				: isFilled
				? FReturnColor({ color: "Black" })
				: FReturnColor({ color: "BG Light" })),
		boxSizing: "border-box",
		caretColor: FReturnColor({ color: "Main" }),
		cursor: disabled ? "not-allowed" : "text",
		display: "flex",
		flexDirection: "column",
		justifyContent: multiline ? undefined : "center",
		minHeight: multiline ? "112px" : "56px",
		padding: isTriggered || isFilled ? "4px 4px 4px 12px" : "12px",
		transition: "all 0.2s ease-in-out",
	});

export const inputAreaDiv = (
	isShowDiv: boolean,
	multiline: boolean,
	disabled: boolean
) =>
	style({
		backgroundColor: FReturnColor({ color: "White" }),
		border: "none",
		color: FReturnColor({ color: "Black" }),
		display: isShowDiv ? "block" : "none",
		font: multiline ? FFontTypes.Small_Title() : FFontTypes.Large_Text(),
		outline: "none",
		overflowX: "hidden",
		overflowY: "auto",
		padding: 0,
		resize: "none",
		width: "100%",
		wordBreak: "break-all",
		cursor: disabled ? "not-allowed" : "text",
		$nest: {
			"&::placeholder": { color: FReturnColor({ color: "Grey" }) },
		},
	});
