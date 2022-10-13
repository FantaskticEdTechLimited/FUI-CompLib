import { style } from "typestyle";

export const FCheckBoxDiv = (disabled?: boolean) =>
	style({
		width: "24px",
		height: "24px",
		cursor: disabled ? "not-allowed" : "pointer",
		opacity: disabled ? 0.7 : 1,
		overflow: "visible",
	});
