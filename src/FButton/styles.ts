import { style } from "typestyle";
import { FUseColor } from "..";
import { FButtonProps } from "./types";

export const FButtonContainer = (props: FButtonProps, isHover: boolean) =>
	style({
		alignItems: "center",
		backgroundColor:
			!props.disabled && isHover
				? props.type === "Text"
					? undefined
					: FUseColor({ colorName: "Main" })
				: props.type === "Primary"
				? FUseColor({ colorName: "Main" })
				: props.type === "Secondary"
				? FUseColor({ colorName: "Sub" })
				: FUseColor({ colorName: "White" }),
		borderRadius: "4px",
		border:
			props.type === "Outline"
				? "2px solid " + FUseColor({ colorName: "Main" })
				: "none",
		cursor: props.disabled ? "not-allowed" : "pointer",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		opacity:
			!props.disabled && isHover
				? props.type === "Primary"
					? 0.8
					: 1
				: props.disabled
				? 0.4
				: 1,
		padding: "12px 16px",
	});
