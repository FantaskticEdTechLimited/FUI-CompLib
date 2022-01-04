import { style } from "typestyle";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FPrimaryButtonProps } from "./types";

export const FPrimaryButtonContainer = (props: FPrimaryButtonProps) =>
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
