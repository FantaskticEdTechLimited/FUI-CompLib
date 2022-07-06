import { style } from "typestyle";
import { FUseColor } from "..";
import { FDropdownOptionDivProps } from "./types";

export const FDropdownContainer = () => {
	const borderColor = FUseColor({
		colorName: "BG Light",
	});
	const backgroundColor = FUseColor({
		colorName: "White",
	});
	return style({
		maxHeight: "inherit",
		boxSizing: "border-box",
		padding: "0.75rem",
		display: "flex",
		flexDirection: "column",
		rowGap: "0.75rem",
		overflowY: "auto",
		overflowX: "hidden",
		border: "0.063rem solid " + borderColor,
		borderRadius: "0.5rem",
		backgroundColor: backgroundColor,
	});
};

export const FDropdownOptionDiv = (stylesProps: FDropdownOptionDivProps) =>
	style({
		backgroundColor:
			stylesProps.pressCount - stylesProps.index === 1
				? FUseColor({ colorName: "Sub" })
				: "inherit",
		cursor: stylesProps.isSelected ? "not-allowed" : "pointer",
		$nest: {
			"&:hover": {
				$nest: {
					"&> div": {
						color: FUseColor({ colorName: "Main" }),
					},
				},
			},
		},
	});
