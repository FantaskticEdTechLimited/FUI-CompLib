import { style } from "typestyle";

export const FSVGIconDiv = (disabled?: boolean) =>
	style({
		alignItems: "center",
		cursor: disabled ? "not-allowed" : "pointer",
		display: "flex",
		opacity: disabled ? 0.4 : 1,
		overflow: "visible",
		width: "fit-content",
	});
