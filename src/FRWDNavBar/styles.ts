import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { RWDMode } from "../global.types";
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
export const FHiddenSideBarContainer = style({
	width: "15rem",
	backgroundColor: FColorTypes.BRAND,
	boxSizing: "border-box",
	height: "inherit",
	display: "flex",
	flexDirection: "column",
	rowGap: ".5rem",
	padding: ".7rem 1rem",
});

export const FNormalSideNavBarContainer = style({
	height: "100vh",
	width: "15rem",

	backgroundColor: FColorTypes.BRAND,

	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
	rowGap: ".5rem",

	overflow: "hidden",
	boxSizing: "border-box",
	padding: ".7rem 1rem",
});

export const FSideNavBarContainer = style({
	flexGrow: 1,
	boxShadow: "0rem 0rem 0.5rem rgba(72, 63, 226, 0.16)",
	boxSizing: "border-box",
	overflowY: "scroll",
	zIndex: 20,
	display: "flex",
	flexDirection: "column",
});

export const FTopNavBarContainer = (props: FSideNavBarProps) =>
	style({
		backgroundColor: FColorTypes.BRAND,
		border: "0.063rem solid " + FColorTypes.PRIMARY_LIGHT,
		boxShadow: "0rem 0rem 0.5rem " + FColorTypes.BRAND_BG,
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

export const FTopNavBarContainer_MenuIcon = style({
	borderRadius: "0.25rem",
	backgroundColor: FColorTypes.BRAND_BG,
	padding: "0.25rem",
});

export const FTopNavBarContainer_CloseIcon = style({
	borderRadius: "0.25rem",
	backgroundColor: FColorTypes.BRAND_BG,
	padding: "0.25rem",
	alignSelf: "flex-end",
});

export const Divider = style({
	height: "0.125rem",
	backgroundColor: FColorTypes.PRIMARY_WHITE,
});
