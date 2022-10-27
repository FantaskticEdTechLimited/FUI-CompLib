import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { style } from "typestyle";
import { FReturnColor } from "..";
import { InputStateProps } from "./types";

export const FSearchBar_Container = (state: InputStateProps) =>
	style({
		alignItems: "center",
		backgroundColor: FReturnColor({ color: "White" }),
		border:
			"1.6px solid " +
			FReturnColor({
				color:
					state.isHover || state.isTriggered || state.isFilled
						? "Main"
						: "Stroke Grey",
			}),
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
