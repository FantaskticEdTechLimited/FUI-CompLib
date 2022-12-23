import { style } from "typestyle";
import { FReturnColor } from "..";
import { FDropdownOptionDivProps } from "./types";

export const dropdownContainer = () =>
	style({
		maxHeight: "inherit",
		boxSizing: "border-box",
		padding: "12px",
		display: "flex",
		flexDirection: "column",
		rowGap: "12px",
		overflowY: "auto",
		overflowX: "hidden",
		border: "1px solid " + FReturnColor({ color: "BG Light" }),
		borderRadius: "8px",
		backgroundColor: FReturnColor({ color: "White" }),
	});

export const dropdownOptionDiv = (stylesProps: FDropdownOptionDivProps) =>
	style({
		backgroundColor:
			stylesProps.pressCount - stylesProps.index === 1
				? FReturnColor({ color: "Sub" })
				: "inherit",
		cursor: stylesProps.isSelected ? "not-allowed" : "pointer",
		$nest: {
			"&:hover": {
				$nest: {
					"&> div": {
						color: FReturnColor({ color: "Main" }),
					},
				},
			},
		},
	});
