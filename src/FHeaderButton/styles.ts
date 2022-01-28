import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { defaultThemeProps } from "../global.types";
import { FHeaderButtonProps } from "./types";

export const FHeaderButtonContainer = (props: FHeaderButtonProps) =>
	style({
		display: "flex",
		alignItems: "center",
		width: "fit-content",
		backgroundColor: props.themeProps?.subTheme ?? defaultThemeProps.subTheme,
		borderRadius: "0.25rem",
		boxSizing: "border-box",
		padding: "0.5rem",
		cursor: props.disabled ? "not-allowed" : "pointer",
		opacity: props.disabled ? 0.4 : 1,
		$nest: {
			"&:hover": {
				backgroundColor: props.disabled
					? undefined
					: props.themeProps?.mainTheme ?? defaultThemeProps.mainTheme,
				$nest: {
					"svg path": {
						stroke: props.disabled ? undefined : FColorTypes.PRIMARY_WHITE,
					},
				},
			},
		},
	});
