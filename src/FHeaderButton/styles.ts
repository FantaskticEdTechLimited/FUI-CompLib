import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { FTheme } from "../FThemeContext/types";
import { FHeaderButtonProps } from "./types";

export const FHeaderButtonContainer = (
	props: FHeaderButtonProps,
	theme: FTheme
) =>
	style({
		display: "flex",
		alignItems: "center",
		width: "fit-content",
		backgroundColor: theme.subThemeColor,
		borderRadius: "0.25rem",
		boxSizing: "border-box",
		padding: "0.5rem",
		cursor: props.disabled ? "not-allowed" : "pointer",
		opacity: props.disabled ? 0.4 : 1,
		$nest: {
			"&:hover": {
				backgroundColor: props.disabled ? undefined : theme.mainThemeColor,
				$nest: {
					"svg path": {
						stroke: props.disabled
							? undefined
							: FColorTypes.FPrimaryColors.WHITE,
					},
				},
			},
		},
	});
