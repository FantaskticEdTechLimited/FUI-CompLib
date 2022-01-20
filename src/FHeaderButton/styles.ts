import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";

export const FHeaderButtonContainer = (disabled: boolean) =>
	style({
		display: "flex",
		alignItems: "center",
		width: "fit-content",
		backgroundColor: FColorTypes.BRAND_BG,
		borderRadius: "0.25rem",
		boxSizing: "border-box",
		padding: "0.5rem",
		cursor: disabled ? "not-allowed" : "pointer",
		opacity: disabled ? 0.4 : 1,
		$nest: {
			"&:hover": {
				backgroundColor: disabled ? undefined : FColorTypes.BRAND,
				$nest: {
					"svg path": {
						stroke: disabled ? undefined : FColorTypes.PRIMARY_WHITE,
					},
				},
			},
		},
	});
