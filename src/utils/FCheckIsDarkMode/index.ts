import { FThemeMode, FUseTheme } from "../..";

/**
 * Check the browser is in dark mode or not.
 *
 * It will return true if it is dark mode.
 */
export const FCheckIsDarkMode = () => {
	const { theme } = FUseTheme();
	const isDarkMode = theme.themeMode === FThemeMode.DARK;

	return isDarkMode;
};
