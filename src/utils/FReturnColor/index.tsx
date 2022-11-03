import { FColorTypes } from "@innoplus-studio/fui-colorlib";
import { FThemeMode, FUseTheme } from "../..";
import { FReturnColorProps } from "./types";

/**
 * Returns color based on the input color with the theme mode
 * ( _light_ or _dark_ ) of the browser setting.
 *
 * For example, `FReturnColor({ color: "Black" })` returns
 * _`#111111`_ and _`#F5F5F5`_ in _light_ and  _dark_ mode respectively.
 */
export const FReturnColor = (props: FReturnColorProps) => {
	const { theme } = FUseTheme();
	const isDarkMode = theme.themeMode === FThemeMode.DARK;

	switch (props.color) {
		// =======================================================================
		// Theme Colors (theme color will be converted based on the theme mode)
		case "Main":
			return isDarkMode
				? theme.themeColors.mainThemeColor.darkMode
				: theme.themeColors.mainThemeColor.lightMode;

		case "Sub":
			return isDarkMode
				? theme.themeColors.subThemeColor.darkMode
				: theme.themeColors.subThemeColor.lightMode;
		// =======================================================================
		// Primary Colors
		case "Black":
			return isDarkMode
				? props.darkModeColor ?? FColorTypes.FPrimaryColors.BLACK.DM
				: FColorTypes.FPrimaryColors.BLACK.LM;

		case "Dark":
			return isDarkMode
				? props.darkModeColor ?? FColorTypes.FPrimaryColors.DARK.DM
				: FColorTypes.FPrimaryColors.DARK.LM;

		case "Grey":
			return isDarkMode
				? props.darkModeColor ?? FColorTypes.FPrimaryColors.GREY.DM
				: FColorTypes.FPrimaryColors.GREY.LM;

		case "Stroke Grey":
			return isDarkMode
				? props.darkModeColor ?? FColorTypes.FPrimaryColors.STROKE_GREY.DM
				: FColorTypes.FPrimaryColors.STROKE_GREY.LM;

		case "BG Light":
			return isDarkMode
				? props.darkModeColor ?? FColorTypes.FPrimaryColors.BG_LIGHT.DM
				: FColorTypes.FPrimaryColors.BG_LIGHT.LM;

		case "White":
			return isDarkMode
				? props.darkModeColor ?? FColorTypes.FPrimaryColors.WHITE.DM
				: FColorTypes.FPrimaryColors.WHITE.LM;
		// =======================================================================
		// Secondary Colors
		case "Red":
			return isDarkMode
				? props.darkModeColor ?? FColorTypes.FSecondaryColors.RED.DM
				: FColorTypes.FSecondaryColors.RED.LM;

		case "Orange":
			return isDarkMode
				? props.darkModeColor ?? FColorTypes.FSecondaryColors.ORANGE.DM
				: FColorTypes.FSecondaryColors.ORANGE.LM;

		case "Yellow":
			return isDarkMode
				? props.darkModeColor ?? FColorTypes.FSecondaryColors.YELLOW.DM
				: FColorTypes.FSecondaryColors.YELLOW.LM;

		case "Green":
			return isDarkMode
				? props.darkModeColor ?? FColorTypes.FSecondaryColors.GREEN.DM
				: FColorTypes.FSecondaryColors.GREEN.LM;

		case "Blue":
			return isDarkMode
				? props.darkModeColor ?? FColorTypes.FSecondaryColors.BLUE.DM
				: FColorTypes.FSecondaryColors.BLUE.LM;

		case "Purple":
			return isDarkMode
				? props.darkModeColor ?? FColorTypes.FSecondaryColors.PURPLE.DM
				: FColorTypes.FSecondaryColors.PURPLE.LM;
		// =======================================================================
	}
};
