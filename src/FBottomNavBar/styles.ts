import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { FOverrideStyle } from "..";
import { FTheme } from "../FThemeContext/types";

export const FBottomNavBarContainer = style({
	alignItems: "center",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	width: "100%",
});

export const FLeadingButtonDiv = (disabled: boolean, theme: FTheme) =>
	style({
		alignSelf: "flex-start",
		padding: FOverrideStyle("0.5rem 0.75rem"),
		backgroundColor: disabled ? FColorTypes.FPrimaryColors.GREY : theme.subThemeColor,
	});

export const FActionButtonDiv = (disabled: boolean, theme: FTheme) =>
	style({
		alignSelf: "flex-end",
		padding: FOverrideStyle("0.5rem 0.75rem"),
		backgroundColor: disabled ? FColorTypes.FPrimaryColors.GREY : theme.mainThemeColor,
	});
