import { FUseTheme } from "../..";

/**
 * Get the theme color, i.e. main or sub theme color.
 *
 * For example, FGetThemeColor("Main") returns main theme color (in light/dark mode)
 */
export const FGetThemeColor = (themeType: "Main" | "Sub") => {
	const { theme } = FUseTheme();
	const isMainTheme = themeType === "Main";

	if (isMainTheme) return theme.themeColors.mainThemeColor;
	else return theme.themeColors.subThemeColor;
};
