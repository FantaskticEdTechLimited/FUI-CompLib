import { style } from "typestyle";
import { FUseColor } from "..";

export const FPopUpOverlay = () => {
	return style({
		backgroundColor: FUseColor({
			colorName: "Dark",
		}),
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
};

export const FPopUpContainer = (screenWidth: number, screenHeight: number) =>
	style({
		display: "flex",
		flexDirection: "column",
		rowGap: "24px",
		maxWidth: screenWidth,
		maxHeight: screenHeight,
		backgroundColor: FUseColor({
			colorName: "White",
		}),
		border:
			"1px solid " +
			FUseColor({
				colorName: "BG Light",
			}),
		borderRadius: "8px",
		boxSizing: "border-box",
		padding: "24px",
	});
