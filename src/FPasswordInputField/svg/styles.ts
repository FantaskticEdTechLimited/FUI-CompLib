import { style } from "typestyle";

export const eyeIcon = (disabled: boolean) =>
	style({
		cursor: disabled ? "not-allowed" : "pointer",
		opacity: disabled ? 0.4 : 1,
	});
