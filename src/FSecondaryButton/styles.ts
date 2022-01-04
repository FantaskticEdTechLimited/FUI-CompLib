import { style } from "typestyle";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FSecondaryButtonProps } from "./types";

export const FSecondaryButtonContainer = (props: FSecondaryButtonProps) =>
	style({
		alignItems: "center",
		backgroundColor: FColorTypes.PURPLE_BG,
		borderRadius: "0.25rem",
		cursor: props.disabled ? "not-allowed" : "pointer",
		display: "flex",
		justifyContent: "center",
		opacity: props.disabled ? 0.4 : 1,
		padding: "0.75rem 1rem",
	});
