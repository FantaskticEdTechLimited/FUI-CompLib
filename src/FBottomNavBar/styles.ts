import { style } from "typestyle";
import { FOverrideStyle } from "..";

export const FBottomNavBarContainer = style({
	alignItems: "center",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	width: "100%",
});

export const FLeadingButtonDiv = () =>
	style({
		alignSelf: "flex-start",
		padding: FOverrideStyle("8px 12px"),
	});

export const FActionButtonDiv = () =>
	style({
		alignSelf: "flex-end",
		padding: FOverrideStyle("8px 12px"),
	});
