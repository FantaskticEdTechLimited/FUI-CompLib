import { style } from "typestyle";
import { defaultThemeProps, ThemeProps } from "../global.types";

export const FDoubleTabs_Wrapper = (disabled: boolean) =>
	style({
		display: "flex",
		flexDirection: "column",
		height: "100%",
		width: "100%",
		rowGap: "1rem",
		cursor: disabled ? "not-allowed" : "auto",
		opacity: disabled ? 0.4 : 1,
	});

export const FDoubleTabs_Header = style({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	alignSelf: "center",
	width: "fit-content",
});

export const FDoubleTabs_TabsContainer = (theme: ThemeProps) =>
	style({
		display: "flex",
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		columnGap: "0.25rem",
		boxSizing: "border-box",
		padding: "0.25rem",
		backgroundColor: theme?.subTheme ?? defaultThemeProps.subTheme,
		boxShadow: "inset 0 0 0.125rem rgba(0, 0, 0, 0.04)",
		borderRadius: "0.5rem",
	});

export const FDoubleTabs_TabButton_Container = (isSelected: boolean) =>
	style({
		display: "flex",
		justifyContent: "center",
		boxSizing: "border-box",
		padding: "0.5rem 0.625rem" + " !important",
		backgroundColor: isSelected ? undefined : "transparent !important",
	});
