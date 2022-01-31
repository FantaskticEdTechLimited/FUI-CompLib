import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { defaultThemeProps } from "../global.types";

import { FButtonProps, FButtonTypes } from "./types";

export const FButtonContainer = (props: FButtonProps) =>
	style({
		alignItems: "center",
		backgroundColor:
			props.type === FButtonTypes.PRIMARY
				? props.themeProps?.mainTheme ?? defaultThemeProps.mainTheme
				: props.type === FButtonTypes.SECONDARY
				? props.themeProps?.subTheme ?? defaultThemeProps.subTheme
				: FColorTypes.PRIMARY_WHITE,
		borderRadius: "0.25rem",
		border:
			props.type === FButtonTypes.OUTLINE
				? "0.125rem solid" + props.themeProps?.mainTheme ??
				  defaultThemeProps.mainTheme
				: "none",
		cursor: props.disabled ? "not-allowed" : "pointer",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		opacity: props.disabled ? 0.4 : 1,
		padding: "0.75rem 1rem",
		$nest: {
			"&:hover": {
				opacity:
					props.type === FButtonTypes.PRIMARY
						? props.disabled
							? 0.4
							: 0.8
						: undefined,
				backgroundColor:
					props.type === FButtonTypes.SECONDARY ||
					props.type === FButtonTypes.OUTLINE
						? props.themeProps?.mainTheme ?? defaultThemeProps.mainTheme
						: undefined,
				$nest: {
					div: {
						color:
							props.type === FButtonTypes.SECONDARY ||
							props.type === FButtonTypes.OUTLINE
								? FColorTypes.PRIMARY_WHITE
								: props.type === FButtonTypes.TEXT
								? props.themeProps?.mainTheme ?? defaultThemeProps.mainTheme
								: undefined,
					},
				},
			},
		},
	});
