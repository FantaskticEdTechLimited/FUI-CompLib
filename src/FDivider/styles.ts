import { style } from "typestyle";
import { FUseColor } from "..";

export const FDivider_Container = (isVertical: boolean) =>
	style({
		height: isVertical ? "100%" : "0.125rem",
		width: isVertical ? "0.125rem" : "100%",
		backgroundColor: FUseColor({
			colorName: "Grey",
		}),
	});
