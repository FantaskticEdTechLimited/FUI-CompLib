import { style } from "typestyle";

export const FScrollableContainer_Container = (horizontal?: boolean) =>
	style({
		overflowY: horizontal ? "hidden" : "visible",
		overflowX: horizontal ? "visible" : "hidden",
	});
