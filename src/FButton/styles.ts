import { style } from "typestyle";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib"; 
import { FButtonProps, FButtonTypes } from "./types";

export const FButtonContainer = (props: FButtonProps) =>
	style({
		alignItems: "center",
		backgroundColor:
			props.type === FButtonTypes.PRIMARY
				? FColorTypes.BRAND
				: props.type === FButtonTypes.SECONDARY
				? FColorTypes.PURPLE_BG
				: FColorTypes.PURE_WHITE,
		borderRadius: "0.25rem",
		border:
			props.type === FButtonTypes.PRIMARY || props.type === FButtonTypes.OUTLINE
				? "0.125rem solid" + FColorTypes.BRAND
				: "none",
		cursor: props.disabled ? "not-allowed" : "pointer",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		opacity: props.disabled ? 0.4 : 1,
		padding: "0.75rem 1rem",
	});
