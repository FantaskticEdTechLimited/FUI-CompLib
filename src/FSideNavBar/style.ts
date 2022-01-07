import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { FSideNavBarProps } from "./type";

export const FSideNarBarOverlayContainer = (
	props: FSideNavBarProps,
	isOpen: boolean,
	screenWidth: number
) =>
	style({
		backgroundColor:
			screenWidth >= 1280 ? "transparent" : FColorTypes.DARK_GREY + "66",
		display: props.visible ? "flex" : "none",
		flexDirection: "row",
		height: "100%",
		justifyContent: screenWidth >= 1280 ? "flex-start" : "flex-end",
		left: screenWidth >= 1280 ? 0 : undefined,
		position: "fixed",
		right: screenWidth >= 1280 ? undefined : isOpen ? 0 : "-100vw",
		top: 0,
		transition: "all 0.2s ease-in-out",
		visibility: screenWidth >= 1280 || isOpen ? "visible" : "hidden",
		width: "100vw",
		zIndex: isOpen ? 20 : 10,
	});

export const FSideNavBarContainer = style({
	backgroundColor: FColorTypes.BRAND,
	boxShadow: "0rem 0rem 0.5rem rgba(72, 63, 226, 0.16)",
	boxSizing: "border-box",
	height: "100%",
	overflowX: "hidden",
	overflowY: "auto",
	position: "fixed",
	top: 0,
	width: "15rem",
	zIndex: 20,
});

export const FSideNavBarContentDiv = (
	props: FSideNavBarProps,
	screenWidth: number
) =>
	style({
		display: props.visible ? "flex" : "none",
		flexDirection: "column",
		overflowX: "hidden",
		overflowY: "auto",
		padding:
			screenWidth < 720
				? "0.5rem 1rem"
				: screenWidth < 1200
				? "0.75rem 1.5rem"
				: "1.5rem 1.5rem",
	});

export const FTopNavBarContainer = (
	props: FSideNavBarProps,
	screenWidth: number
) =>
	style({
		alignItems: "center",
		backgroundColor: FColorTypes.BRAND,
		border: "0.063rem solid " + FColorTypes.SOFT_STROKE,
		boxShadow: "0rem 0rem 0.5rem " + FColorTypes.PURPLE_BG,
		boxSizing: "border-box",
		display: props.visible ? "flex" : "none",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: screenWidth < 720 ? "0.5rem 1rem" : "0.75rem 1.5rem",
		position: "fixed",
		top: 0,
		width: "100%",
		zIndex: 15,
	});
