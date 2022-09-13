import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { style } from "typestyle";
import { FUseColor } from "..";

export const FSearchBarContainer = (isTriggered: boolean) =>
	style({
		alignItems: "center",
		backgroundColor: FUseColor({ colorName: "Sub" }),
		border:
			"2px solid " + (isTriggered ? FUseColor({ colorName: "Main" }) : "none"),
		borderRadius: "4px",
		boxSizing: "border-box",
		caretColor: FUseColor({ colorName: "Main" }),
		columnGap: "8px",
		cursor: "text",
		display: "flex",
		flexDirection: "row",
		padding: "12px",
		width: "100%",
	});

export const FSearchBarInputAreaDiv = () => {
	return style({
		backgroundColor: "inherit",
		border: "none",
		color: FUseColor({
			colorName: "Black",
		}),
		font: FFontTypes.Large_Text(),
		outline: "none",
		overflow: "hidden",
		padding: 0,
		resize: "none",
		width: "100%",
		$nest: {
			"&::placeholder": {
				color: FUseColor({
					colorName: "Grey",
				}),
			},
		},
	});
};
