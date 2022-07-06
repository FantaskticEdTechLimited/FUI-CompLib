import { style } from "typestyle";
import { FUseColor } from "..";
import { FButtonProps, FButtonTypes } from "./types";

export const FButtonContainer = (props: FButtonProps) =>
	style({
		alignItems: "center",
		backgroundColor:
			props.type === FButtonTypes.PRIMARY
				? FUseColor({ colorName: "Main" })
				: props.type === FButtonTypes.SECONDARY
				? FUseColor({ colorName: "Sub" })
				: FUseColor({
						colorName: "White",
				  }),
		borderRadius: "0.25rem",
		border:
			props.type === FButtonTypes.OUTLINE
				? "0.125rem solid" + FUseColor({ colorName: "Main" })
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
						? FUseColor({ colorName: "Main" })
						: undefined,
				$nest: {
					div: {
						color:
							props.type === FButtonTypes.SECONDARY ||
							props.type === FButtonTypes.OUTLINE
								? FUseColor({
										colorName: "White",
								  })
								: props.type === FButtonTypes.TEXT
								? FUseColor({ colorName: "Main" })
								: undefined,
					},
				},
			},
		},
	});
