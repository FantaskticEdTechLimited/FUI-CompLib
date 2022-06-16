import { FUseColor } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { FCheckIsDarkMode, FGetThemeColor } from "..";
import { FDropdownOptionDivProps } from "./types";

export const FDropdownContainer = () => {
	const isDarkMode = FCheckIsDarkMode();
	return style({
		maxHeight: "inherit",
		boxSizing: "border-box",
		padding: "0.75rem",
		display: "flex",
		flexDirection: "column",
		rowGap: "0.75rem",
		overflowY: "auto",
		overflowX: "hidden",
		border:
			"0.063rem solid " +
			FUseColor({
				colorName: "BG Light",
				isDarkMode: isDarkMode,
			}),
		borderRadius: "0.5rem",
		backgroundColor: FUseColor({
			colorName: "White",
			isDarkMode: isDarkMode,
		}),
	});
};

export const FDropdownOptionDiv = (stylesProps: FDropdownOptionDivProps) =>
	style({
		backgroundColor:
			stylesProps.pressCount - stylesProps.index === 1
				? FGetThemeColor("Sub")
				: "inherit",
		cursor: stylesProps.isSelected ? "not-allowed" : "pointer",
		$nest: {
			"&:hover": {
				$nest: {
					"&> div": {
						color: FGetThemeColor("Main"),
					},
				},
			},
		},
	});
