import { FUseColor } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { FCheckIsDarkMode, FGetThemeColor } from "..";
import { FHeaderButtonProps } from "./types";

export const FHeaderButtonContainer = (props: FHeaderButtonProps) =>
	style({
		display: "flex",
		alignItems: "center",
		width: "fit-content",
		backgroundColor: FGetThemeColor("Sub"),
		borderRadius: "0.25rem",
		boxSizing: "border-box",
		padding: "0.5rem",
		cursor: props.disabled ? "not-allowed" : "pointer",
		opacity: props.disabled ? 0.4 : 1,
		$nest: {
			"&:hover": {
				backgroundColor: props.disabled ? undefined : FGetThemeColor("Main"),
				$nest: {
					"svg path": {
						stroke: props.disabled
							? undefined
							: FUseColor({
									colorName: "White",
									isDarkMode: FCheckIsDarkMode(),
							  }),
					},
				},
			},
		},
	});
