import { style } from "typestyle";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib"; 
import { FButtonProps } from "../global.types";

export const FPrimaryButtonContainer = (props: FButtonProps) =>
	style({
		alignItems: "center",
		backgroundColor: FColorTypes.BRAND,
		borderRadius: "0.25rem",
		cursor: props.disabled ? "not-allowed" : "pointer",
		display: "flex",
		justifyContent: "center",
		opacity: props.disabled ? 0.4 : 1,
		padding: "0.75rem 1rem",
	});
