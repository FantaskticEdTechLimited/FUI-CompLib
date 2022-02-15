import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { FDropdownOptionDivProps } from "./types";

export const FDropdownContainer = style({
	maxHeight: "inherit",
	boxSizing: "border-box",
	padding: "0.75rem",
	display: "flex",
	flexDirection: "column",
	rowGap: "0.75rem",
	overflowY: "auto",
	overflowX: "hidden",
	border: "0.063rem solid " + FColorTypes.PRIMARY_LIGHT,
	borderRadius: "0.5rem",
	backgroundColor: FColorTypes.PRIMARY_WHITE,
});

export const FDropdownOptionDiv = (stylesProps: FDropdownOptionDivProps) =>
	style({
		backgroundColor:
		stylesProps.pressCount - stylesProps.index === 1
				? stylesProps.theme.subThemeColor
				: "inherit",
		cursor: stylesProps.isSelected ? "not-allowed" : "pointer",
		$nest: {
			"&:hover": {
				$nest: {
					"&> div": {
						color: stylesProps.theme.mainThemeColor
					},
				},
			},
		},
	});
