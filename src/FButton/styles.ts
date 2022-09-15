import { style } from "typestyle";
import { FUseColor } from "..";
import { FButtonProps, FButtonTypes } from "./types";

export const FButtonContainer = (props: FButtonProps, isHover: boolean) =>
	style({
		alignItems: "center",
		backgroundColor: isHover
			? props.type === FButtonTypes.SECONDARY ||
			  props.type === FButtonTypes.OUTLINE
				? FUseColor({ colorName: "Main" })
				: undefined
			: props.type === FButtonTypes.PRIMARY
			? FUseColor({ colorName: "Main" })
			: props.type === FButtonTypes.SECONDARY
			? FUseColor({ colorName: "Sub" })
			: FUseColor({
					colorName: "White",
			  }),
		borderRadius: "4px",
		border:
			props.type === FButtonTypes.OUTLINE
				? "2px solid" + FUseColor({ colorName: "Main" })
				: "none",
		cursor: props.disabled ? "not-allowed" : "pointer",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		opacity: isHover
			? props.type === FButtonTypes.PRIMARY
				? props.disabled
					? 0.4
					: 0.8
				: undefined
			: props.disabled
			? 0.4
			: 1,
		padding: "12px 16px",
		$nest: {
			"&:hover": {
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
