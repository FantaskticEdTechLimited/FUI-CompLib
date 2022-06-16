import { FUseColor } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { FCheckIsDarkMode } from "..";

export const FPopUpOverlay = () => {
	const isDarkMode = FCheckIsDarkMode();
	return style({
		backgroundColor: FUseColor({
			colorName: "Dark",
			isDarkMode: isDarkMode,
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
		rowGap: "1.5rem",
		maxWidth: screenWidth,
		maxHeight: screenHeight,
		backgroundColor: FUseColor({
			colorName: "White",
			isDarkMode: FCheckIsDarkMode(),
		}),
		border:
			"0.0625rem solid " +
			FUseColor({
				colorName: "BG Light",
				isDarkMode: FCheckIsDarkMode(),
			}),
		borderRadius: "0.5rem",
		boxSizing: "border-box",
		padding: "1.5rem",
	});
