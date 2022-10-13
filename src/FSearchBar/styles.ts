import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { style } from "typestyle";
import { FReturnColor } from "..";

export const FSearchBar_Container = (isTriggered: boolean) =>
	style({
		alignItems: "center",
		backgroundColor: FReturnColor({ color: "Sub" }),
		border:
			"2px solid " + (isTriggered ? FReturnColor({ color: "Main" }) : "none"),
		borderRadius: "4px",
		boxSizing: "border-box",
		caretColor: FReturnColor({ color: "Main" }),
		columnGap: "8px",
		cursor: "text",
		display: "flex",
		flexDirection: "row",
		padding: "12px",
		width: "100%",
	});

export const FSearchBar_InputAreaDiv = () =>
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
		$nest: {
			"&::placeholder": {
				color: FReturnColor({ color: "Grey" }),
			},
		},
	});
