import { style } from "typestyle";
import { FCheckIsDarkMode, FUseColor } from "..";
import { FRWDMode } from "../global.types";
import { FSideNavBarProps } from "./types";

export const FHiddenSideBarOverlay = (
	props: FSideNavBarProps,
	isOpen: boolean
) =>
	style({
		position: "fixed",
		marginTop: 0,
		height: "100vh",
		backgroundColor:
			FUseColor({
				colorName: "Dark",
			}) + FCheckIsDarkMode()
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

export const FHiddenSideBarContainer = () => {
	const color = FUseColor({ colorName: "Main" });
	return style({
		width: "15rem",
		backgroundColor: color,
		boxSizing: "border-box",
		height: "inherit",
		display: "flex",
		flexDirection: "column",
		rowGap: ".5rem",
		padding: ".7rem 1rem",
		boxShadow: "0rem 0rem 0.5rem rgba(72, 63, 226, 0.16)",
	});
};

export const FNormalSideNavBarContainer = () => {
	const color = FUseColor({ colorName: "Main" });
	return style({
		height: "100vh",
		width: "15rem",
		backgroundColor: color,
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		rowGap: ".5rem",
		overflow: "hidden",
		boxSizing: "border-box",
		padding: ".7rem 1rem",
		boxShadow: "0rem 0rem 0.5rem rgba(72, 63, 226, 0.16)",
	});
};

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

export const FTopNavBarContainer = (props: FSideNavBarProps) =>
	style({
		backgroundColor: FUseColor({ colorName: "Main" }),
		border:
			"0.063rem solid " +
			FUseColor({
				colorName: "BG Light",
			}),
		boxShadow: "0rem 0rem 0.5rem " + FUseColor({ colorName: "Sub" }),
		boxSizing: "border-box",
		display: props.visible ? "flex" : "none",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding:
			props.rwdMode === FRWDMode.MOBILE ? "0.5rem 1rem" : "0.75rem 1.5rem",
		width: "100%",
		zIndex: 15,
	});

export const FTopNavBarContainer_MenuIcon = () => {
	const color = FUseColor({ colorName: "Sub" });
	return style({
		borderRadius: "0.25rem",
		backgroundColor: color,
		padding: "0.25rem",
	});
};

export const FTopNavBarContainer_CloseIcon = () => {
	const color = FUseColor({ colorName: "Sub" });
	return style({
		borderRadius: "0.25rem",
		backgroundColor: color,
		padding: "0.25rem",
		alignSelf: "flex-end",
	});
};

export const Divider = () => {
	return style({
		height: "0.125rem",
		backgroundColor: FUseColor({
			colorName: "White",
		}),
	});
};
