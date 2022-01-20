import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";

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

export const FDropdownOptionDiv = (
	pressCount: number,
	index: number,
	isSelected: boolean
) =>
	style({
		backgroundColor:
			pressCount - index === 1 ? FColorTypes.BRAND_BG : "inherit",
		cursor: isSelected ? "not-allowed" : "pointer",
		$nest: {
			"&:hover": {
				$nest: {
					"&> div": {
						color: FColorTypes.BRAND,
					},
				},
			},
		},
	});
