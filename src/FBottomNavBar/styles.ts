import { FUseColor } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { FCheckIsDarkMode, FGetThemeColor, FOverrideStyle } from "..";

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
					isDarkMode: FCheckIsDarkMode(),
			  })
			: FGetThemeColor("Sub"),
	});

export const FActionButtonDiv = (disabled: boolean) =>
	style({
		alignSelf: "flex-end",
		padding: FOverrideStyle("0.5rem 0.75rem"),
		backgroundColor: disabled
			? FUseColor({
					colorName: "Grey",
					isDarkMode: FCheckIsDarkMode(),
			  })
			: FGetThemeColor("Sub"),
	});
