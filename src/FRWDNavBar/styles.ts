import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { defaultThemeProps, RWDMode } from "../global.types";
import { FSideNavBarProps } from "./types";

export const FHiddenSideBarOverlay = (
	props: FSideNavBarProps,
	isOpen: boolean
) =>
	style({
		position: "fixed",
		marginTop: 0,
		height: "100vh",
		backgroundColor: FColorTypes.PRIMARY_DARK + "66",
		display: props.visible && isOpen ? "flex" : "none",
		flexDirection: "row",
		justifyContent:
			props.overlayMenuPosition === "left" ? "flex-start" : "flex-end",
		width: isOpen ? "100vw" : undefined,
		zIndex: 20,
		overflow: "hidden",
	});
export const FHiddenSideBarContainer = (props: FSideNavBarProps) =>
	style({
		width: "15rem",
		backgroundColor: props.themeProps?.mainTheme ?? defaultThemeProps.mainTheme,
		boxSizing: "border-box",
		height: "inherit",
		display: "flex",
		flexDirection: "column",
		rowGap: ".5rem",
		padding: ".7rem 1rem",
		boxShadow: "0rem 0rem 0.5rem rgba(72, 63, 226, 0.16)",
	});

export const FNormalSideNavBarContainer = (props: FSideNavBarProps) =>
	style({
		height: "100vh",
		width: "15rem",
		backgroundColor: props.themeProps?.mainTheme ?? defaultThemeProps.mainTheme,
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		rowGap: ".5rem",
		overflow: "hidden",
		boxSizing: "border-box",
		padding: ".7rem 1rem",
		boxShadow: "0rem 0rem 0.5rem rgba(72, 63, 226, 0.16)",
	});

export const FSideNavBarContainer = style({
	width: "100%",
	flexGrow: 1,
	boxSizing: "border-box",
	overflowX: "hidden",
	overflowY: "scroll",
	zIndex: 20,
	display: "flex",
	flexDirection: "column",
});

export const FTopNavBarContainer = (props: FSideNavBarProps) =>
	style({
		backgroundColor: props.themeProps?.mainTheme ?? defaultThemeProps.mainTheme,
		border: "0.063rem solid " + FColorTypes.PRIMARY_LIGHT,
		boxShadow:
			"0rem 0rem 0.5rem " + props.themeProps?.subTheme ??
			defaultThemeProps.subTheme,
		boxSizing: "border-box",
		display: props.visible ? "flex" : "none",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding:
			props.rwdMode === RWDMode.MOBILE ? "0.5rem 1rem" : "0.75rem 1.5rem",
		width: "100%",
		zIndex: 15,
	});

export const FTopNavBarContainer_MenuIcon = (props: FSideNavBarProps) =>
	style({
		borderRadius: "0.25rem",
		backgroundColor: props.themeProps?.subTheme ?? defaultThemeProps.subTheme,
		padding: "0.25rem",
	});

export const FTopNavBarContainer_CloseIcon = (props: FSideNavBarProps) =>
	style({
		borderRadius: "0.25rem",
		backgroundColor: props.themeProps?.subTheme ?? defaultThemeProps.subTheme,
		padding: "0.25rem",
		alignSelf: "flex-end",
	});

export const Divider = style({
	height: "0.125rem",
	backgroundColor: FColorTypes.PRIMARY_WHITE,
});