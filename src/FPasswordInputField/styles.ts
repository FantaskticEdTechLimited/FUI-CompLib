import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { style } from "typestyle";
import { FUseColor } from "..";
import { FPasswordInputFieldProps } from "./types";

export const FPasswordInputFieldContainer = (
	isTriggered: boolean,
	isFilled: boolean,
	props: FPasswordInputFieldProps
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
				? FUseColor({ colorName: "Main" })
				: isFilled
				? FUseColor({
						colorName: "Black",
				  })
				: FUseColor({
						colorName: "BG Light",
				  })),
		opacity: props.disabled ? 0.4 : 1,
		cursor: props.disabled ? "not-allowed" : "text",
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
