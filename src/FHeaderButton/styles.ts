import { style } from "typestyle";
import { FUseColor } from "..";
import { FHeaderButtonProps } from "./types";

export const FHeaderButtonContainer = (
	props: FHeaderButtonProps,
	isHover: boolean
) =>
	style({
		display: "flex",
		alignItems: "center",
		width: "fit-content",
		backgroundColor: isHover
			? props.disabled
				? undefined
				: FUseColor({ colorName: "Main" })
			: FUseColor({ colorName: "Sub" }),
		borderRadius: "4px",
		boxSizing: "border-box",
		padding: "8px",
		cursor: props.disabled ? "not-allowed" : "pointer",
		opacity: props.disabled ? 0.4 : 1,
		$nest: {
			"svg path": {
				stroke: isHover
					? props.disabled
						? undefined
						: FUseColor({ colorName: "White" })
					: undefined,
			},
		},
	});
