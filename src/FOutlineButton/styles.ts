import { style } from "typestyle";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FOutlineButtonProps } from "./types";

export const FOutlineButtonContainer = (props: FOutlineButtonProps) =>
	style({
		alignItems: "center",
		backgroundColor: FColorTypes.PURE_WHITE,
		border: "0.125rem solid" + FColorTypes.BRAND,
		borderRadius: "0.25rem",
		cursor: props.disabled ? "not-allowed" : "pointer",
		display: "flex",
		justifyContent: "center",
		opacity: props.disabled ? 0.4 : 1,
		padding: "0.75rem 1rem",
	});
