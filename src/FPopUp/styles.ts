import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";

export const FPopUpOverlay = style({
	backgroundColor: FColorTypes.PRIMARY_DARK + "AB",
	height: "100vh",
	width: "100%",
	top: 0,
	left: 0,
	position: "absolute",
	zIndex: 20,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});

export const FPopUpContainer = (screenWidth: number, screenHeight: number) =>
	style({
		display: "flex",
		flexDirection: "column",
		rowGap: "1.5rem",
		maxWidth: screenWidth,
		maxHeight: screenHeight,
		backgroundColor: FColorTypes.PRIMARY_WHITE,
		border: "1px solid " + FColorTypes.PRIMARY_LIGHT,
		borderRadius: "0.5rem",
		boxSizing: "border-box",
		padding: "1.5rem",
	});
