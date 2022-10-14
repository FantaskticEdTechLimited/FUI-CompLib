import { style } from "typestyle";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FReturnColor } from "../utils/FReturnColor";

export const FNumberInputFieldDiv = (
	isTriggered: boolean,
	isFilled: boolean,
	disabled?: boolean
) =>
	style({
		width: "100%",
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
		justifyContent: "center",
		minHeight: "56px",
		padding: isTriggered || isFilled ? "4px 4px 4px 12px" : "12px",
		transition: "all 0.2s ease-in-out",
	});

export const FNumberInputFieldInputAreaDiv = (
	state: boolean,
	disabled?: boolean
) =>
	style({
		backgroundColor: FReturnColor({ color: "White" }),
		border: "none",
		color: FReturnColor({ color: "Black" }),
		display: state ? "block" : "none",
		font: FFontTypes.Large_Text(),
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
