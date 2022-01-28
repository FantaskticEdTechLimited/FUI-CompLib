import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { defaultThemeProps, ThemeProps } from "../global.types";

export const FBottomNavBarContainer = style({
	alignItems: "center",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	width: "100%",
});

export const FLeadingButtonDiv = (theme: ThemeProps) =>
	style({
		padding: "0.5rem 0.75rem",
		backgroundColor: theme.mainTheme ?? undefined,
	});

export const FActionButtonDiv = (disabled: boolean, theme: ThemeProps) =>
	style({
		alignSelf: "flex-end",
		padding: "0.5rem 0.75rem",
		backgroundColor: disabled
			? FColorTypes.PRIMARY_GREY
			: theme.mainTheme ?? defaultThemeProps.mainTheme,
	});
