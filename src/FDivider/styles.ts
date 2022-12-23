import { style } from "typestyle";
import { FReturnColor } from "..";

export const dividerContainer = (isVertical: boolean) =>
	style({
		height: isVertical ? "100%" : "2px",
		width: isVertical ? "2px" : "100%",
		backgroundColor: FReturnColor({ color: "Grey" }),
	});
