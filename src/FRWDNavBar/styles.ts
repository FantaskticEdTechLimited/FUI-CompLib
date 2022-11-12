import { style } from "typestyle";
import { FCheckIsDarkThemeMode, FReturnColor } from "..";
import { FRWDMode } from "../global.types";
import { FRWDNavBarProps } from "./types";

export const FHiddenSideBarOverlay = (
	props: FRWDNavBarProps,
	isOpen: boolean
) =>
	style({
		position: "fixed",
		marginTop: 0,
		height: "100vh",
		backgroundColor:
			FReturnColor({ color: "Dark" }) + FCheckIsDarkThemeMode()
				? undefined
				: "66",
		display: props.visible && isOpen ? "flex" : "none",
		flexDirection: "row",
		justifyContent:
			props.overlayEnterSide === "left" ? "flex-start" : "flex-end",
		width: isOpen ? "100vw" : undefined,
		zIndex: 20,
		overflow: "hidden",
	});

export const FHiddenSideBarContainer = () =>
	style({
		width: "240px",
		backgroundColor: FReturnColor({ color: "Main" }),
		boxSizing: "border-box",
		height: "inherit",
		display: "flex",
		flexDirection: "column",
		rowGap: "8px",
		padding: "11.2px 16px",
		boxShadow: "0 0 8px rgba(72, 63, 226, 0.16)",
	});

export const FNormalSideNavBarContainer = () =>
	style({
		height: "100vh",
		width: "240px",
		backgroundColor: FReturnColor({ color: "Main" }),
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		rowGap: "8px",
		overflow: "hidden",
		boxSizing: "border-box",
		padding: "11.2px 16px",
		boxShadow: "0 0 8px rgba(72, 63, 226, 0.16)",
	});

export const FSideNavBar_ContentDiv = style({
	width: "100%",
	flexGrow: 1,
	boxSizing: "border-box",
	overflowX: "hidden",
	overflowY: "scroll",
	zIndex: 20,
	display: "flex",
	flexDirection: "column",
});

export const FTopNavBarContainer = (props: FRWDNavBarProps) =>
	style({
		backgroundColor: FReturnColor({ color: "Main" }),
		border: "1px solid " + FReturnColor({ color: "BG Light" }),
		boxShadow: "0 0 8px " + FReturnColor({ color: "Sub" }),
		boxSizing: "border-box",
		display: props.visible ? "flex" : "none",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: props.rwdMode === FRWDMode.MOBILE ? "8px 16px" : "12px 24px",
		width: "100%",
		zIndex: 15,
	});

export const FTopNavBarContainer_MenuIcon = () =>
	style({
		borderRadius: "4px",
		backgroundColor: FReturnColor({ color: "Sub" }),
		padding: "4px",
	});

export const FTopNavBarContainer_CloseIcon = () =>
	style({
		borderRadius: "4px",
		backgroundColor: FReturnColor({ color: "Sub" }),
		padding: "4px",
		alignSelf: "flex-end",
	});

export const Divider = () =>
	style({
		height: "2px",
		backgroundColor: FReturnColor({ color: "White" }),
	});
