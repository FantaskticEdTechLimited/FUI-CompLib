import { FUseColor } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { style } from "typestyle";
import { FCheckIsDarkMode, FGetThemeColor } from "..";

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
			isDarkMode: FCheckIsDarkMode(),
		}),
		borderRadius: "0.5rem",
		border:
			"0.125rem solid " +
			(isTriggered
				? FGetThemeColor("Main")
				: isFilled
				? FUseColor({
						colorName: "Black",
						isDarkMode: FCheckIsDarkMode(),
				  })
				: FUseColor({
						colorName: "BG Light",
						isDarkMode: FCheckIsDarkMode(),
				  })),
		boxSizing: "border-box",
		caretColor: FGetThemeColor("Main"),
		columnGap: "0.5rem",
		display: "flex",
		flexDirection: "row",
		padding: "0.75rem",
	});

export const FEmailInputFieldInputAreaDiv = () => {
	const isDarkMode = FCheckIsDarkMode();
	return style({
		backgroundColor: FUseColor({
			colorName: "White",
			isDarkMode: isDarkMode,
		}),
		border: "none",
		color: FUseColor({
			colorName: "Black",
			isDarkMode: isDarkMode,
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
					isDarkMode: isDarkMode,
				}),
				font: FFontTypes.Large_Text(),
			},
		},
	});
};
