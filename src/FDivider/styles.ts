import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";

export const FDivider_Container = (isVertical: boolean) =>
	style({
		height: isVertical ? "100%" : "2px",
		width: isVertical ? "2px" : "100%",
		backgroundColor: FColorTypes.PRIMARY_GREY,
	});
