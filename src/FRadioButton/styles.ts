import { style } from "typestyle";
import { FRadioButtonProps } from "./types";

export const FRadioButtonDiv = (props: FRadioButtonProps) =>
	style({
		cursor: props.disabled ? "not-allowed" : "pointer",
		height: "24px",
		opacity: props.disabled ? 0.4 : 1,
		overflow: "visible",
		width: "24px",
	});
