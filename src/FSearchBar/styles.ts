import { FUseColor } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { style } from "typestyle";
import { FCheckIsDarkMode, FGetThemeColor } from "..";

export const FSearchBarContainer = (isTriggered: boolean) =>
	style({
		alignItems: "center",
		backgroundColor: FGetThemeColor("Sub"),
		border: "0.125rem solid " + (isTriggered ? FGetThemeColor("Main") : "none"),
		borderRadius: "0.25rem",
		boxSizing: "border-box",
		caretColor: FGetThemeColor("Main"),
		columnGap: "0.5rem",
		cursor: "text",
		display: "flex",
		flexDirection: "row",
		padding: "0.75rem",
		width: "100%",
	});

export const FSearchBarInputAreaDiv = () => {
	const isDarkMode = FCheckIsDarkMode();
	return style({
		backgroundColor: "inherit",
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
			},
		},
	});
};
