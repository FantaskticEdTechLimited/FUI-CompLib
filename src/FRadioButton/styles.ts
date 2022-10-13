import { style } from "typestyle";

export const FRadioButtonDiv = (disabled?: boolean) =>
	style({
		cursor: disabled ? "not-allowed" : "pointer",
		height: "24px",
		opacity: disabled ? 0.4 : 1,
		overflow: "visible",
		width: "24px",
	});
