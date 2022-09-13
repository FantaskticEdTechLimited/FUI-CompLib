import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { style } from "typestyle";
import { FUseColor } from "..";

export const FPasswordInputFieldContainer = (
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
				? FUseColor({ colorName: "Main" })
				: isFilled
				? FUseColor({
						colorName: "Black",
				  })
				: FUseColor({
						colorName: "BG Light",
				  })),
		opacity: disabled ? 0.4 : 1,
		cursor: disabled ? "not-allowed" : "text",
	});

export const FPasswordInputFieldInputAreaDiv = (disabled: boolean) =>
	style({
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
		cursor: disabled ? "not-allowed" : "text",
		$nest: {
			"&::placeholder": {
				color: FUseColor({
					colorName: "Grey",
				}),
				font: FFontTypes.Large_Text(),
			},
		},
	});
