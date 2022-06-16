import { FUseColor } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { FCheckIsDarkMode, FGetThemeColor } from "..";
import { FButtonProps, FButtonTypes } from "./types";

export const FButtonContainer = (props: FButtonProps) =>
	style({
		alignItems: "center",
		backgroundColor:
			props.type === FButtonTypes.PRIMARY
				? FGetThemeColor("Main")
				: props.type === FButtonTypes.SECONDARY
				? FGetThemeColor("Sub")
				: FUseColor({
						colorName: "White",
						isDarkMode: FCheckIsDarkMode(),
				  }),
		borderRadius: "0.25rem",
		border:
			props.type === FButtonTypes.OUTLINE
				? "0.125rem solid" + FGetThemeColor("Main")
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
						? FGetThemeColor("Main")
						: undefined,
				$nest: {
					div: {
						color:
							props.type === FButtonTypes.SECONDARY ||
							props.type === FButtonTypes.OUTLINE
								? FUseColor({
										colorName: "White",
										isDarkMode: FCheckIsDarkMode(),
								  })
								: props.type === FButtonTypes.TEXT
								? FGetThemeColor("Main")
								: undefined,
					},
				},
			},
		},
	});
