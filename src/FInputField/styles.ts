import { style } from "typestyle";
import { FInputFieldProps } from "./types";
import { FFontTypes } from "@innoplus-studio/fui-fontlib";
import { FReturnColor } from "..";

export const FInputFieldContainer = (hasWordCount?: boolean) =>
	style({
		display: "flex",
		flexDirection: "column",
		rowGap: hasWordCount ? "4px" : 0,
		width: "100%",
	});

export const FInputFieldDiv = (
	props: FInputFieldProps,
	isTriggered: boolean,
	isFilled: boolean
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
		cursor: props.disabled ? "not-allowed" : "text",
		display: "flex",
		flexDirection: "column",
		justifyContent: props.multiline ? undefined : "center",
		minHeight: props.multiline ? "112px" : "56px",
		padding: isTriggered || isFilled ? "4px 4px 4px 12px" : "12px",
		transition: "all 0.2s ease-in-out",
	});

export const FInputFieldInputAreaDiv = (
	props: FInputFieldProps,
	state: boolean
) =>
	style({
		backgroundColor: FReturnColor({ color: "White" }),
		border: "none",
		color: FReturnColor({ color: "Black" }),
		display: state ? "block" : "none",
		font: props.multiline ? FFontTypes.Small_Title() : FFontTypes.Large_Text(),
		outline: "none",
		overflowX: "hidden",
		overflowY: "auto",
		padding: 0,
		resize: "none",
		width: "100%",
		wordBreak: "break-all",
		cursor: props.disabled ? "not-allowed" : "text",
		$nest: {
			"&::placeholder": { color: FReturnColor({ color: "Grey" }) },
		},
	});
