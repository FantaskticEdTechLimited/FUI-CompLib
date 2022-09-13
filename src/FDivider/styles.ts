import { style } from "typestyle";
import { FUseColor } from "..";

export const FDivider_Container = (isVertical: boolean) =>
	style({
		height: isVertical ? "100%" : "2px",
		width: isVertical ? "2px" : "100%",
		backgroundColor: FUseColor({
			colorName: "Grey",
		}),
	});
