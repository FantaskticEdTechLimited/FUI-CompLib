import { style } from "typestyle";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";

export const FPopUpOverlay = style({
		backgroundColor: FColorTypes.DARK_GREY + "AB",
		height: "fit-content",
		minHeight: "100vh",
		width: "100%",
		top: 0,
		left: 0,
		position: "absolute",
		zIndex: 20,
		display: "flex",
	});

export const FPopUpDiv = style({
	display: "flex",
	flexDirection: "column",
	rowGap: "1.5rem",
	justifyContent: "center",
	minWidth: "25rem",
	height: "fit-content",
	margin: "auto",
	marginTop: "10vh",
	marginBottom: "10vh",
	padding: "1.5rem",
	backgroundColor: FColorTypes.PURE_WHITE,
	border: "0.063rem solid " + FColorTypes.SOFT_STROKE,
	borderRadius: "0.5rem"
});
