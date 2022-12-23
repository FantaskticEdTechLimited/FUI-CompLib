import { style } from "typestyle";

export const scrollableContainer = (horizontal?: boolean) =>
	style({
		overflowY: horizontal ? "hidden" : "visible",
		overflowX: horizontal ? "visible" : "hidden",
	});
