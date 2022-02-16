import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { FTheme } from "../FThemeContext/types";
import { FButtonProps, FButtonTypes } from "./types";

export const FButtonContainer = (props: FButtonProps, theme: FTheme) =>
	style({
		alignItems: "center",
		backgroundColor:
			props.type === FButtonTypes.PRIMARY
				? theme.mainThemeColor
				: props.type === FButtonTypes.SECONDARY
				? theme.subThemeColor
				: FColorTypes.PRIMARY_WHITE,
		borderRadius: "0.25rem",
		border:
			props.type === FButtonTypes.OUTLINE
				? "0.125rem solid" + theme.mainThemeColor
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
						? theme.mainThemeColor
						: undefined,
				$nest: {
					div: {
						color:
							props.type === FButtonTypes.SECONDARY ||
							props.type === FButtonTypes.OUTLINE
								? FColorTypes.PRIMARY_WHITE
								: props.type === FButtonTypes.TEXT
								? theme.mainThemeColor
								: undefined,
					},
				},
			},
		},
	});
