import { style } from "typestyle";
import { FOverrideStyle, FUseColor } from "..";

export const FBottomNavBarContainer = style({
	alignItems: "center",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	width: "100%",
});

export const FLeadingButtonDiv = (disabled: boolean) =>
	style({
		alignSelf: "flex-start",
		padding: FOverrideStyle("0.5rem 0.75rem"),
		backgroundColor: disabled
			? FUseColor({
					colorName: "Grey",
			  })
			: FUseColor({ colorName: "Sub" }),
	});

export const FActionButtonDiv = (disabled: boolean) =>
	style({
		alignSelf: "flex-end",
		padding: FOverrideStyle("0.5rem 0.75rem"),
		backgroundColor: disabled
			? FUseColor({
					colorName: "Grey",
			  })
			: FUseColor({ colorName: "Sub" }),
	});
