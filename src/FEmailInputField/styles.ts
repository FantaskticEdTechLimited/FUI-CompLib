import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { style } from "typestyle";
import { FUseColor } from "..";

export const FEmailInputFieldWrapper = (isError: boolean, disabled: boolean) =>
	style({
		display: "flex",
		flexDirection: "column",
		rowGap: isError ? "0.25rem" : 0,
		opacity: disabled ? 0.4 : 1,
		cursor: disabled ? "not-allowed" : "text",
	});

export const FEmailInputFieldContainer = (
	isTriggered: boolean,
	isFilled: boolean
) =>
	style({
		alignItems: "center",
		backgroundColor: FUseColor({
			colorName: "White",
		}),
		borderRadius: "0.5rem",
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
		boxSizing: "border-box",
		caretColor: FUseColor({ colorName: "Main" }),
		columnGap: "0.5rem",
		display: "flex",
		flexDirection: "row",
		padding: "0.75rem",
	});

export const FEmailInputFieldInputAreaDiv = () => {
	return style({
		backgroundColor: FUseColor({
			colorName: "White",
		}),
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
				font: FFontTypes.Large_Text(),
			},
		},
	});
};
