import { FThemeMode, FUseTheme } from "../..";

/**
 * Checks the _theme mode_ is in _dark_ mode or not.
 *
 * Returns `true` if it is _dark_ mode.
 */
export const FCheckIsDarkThemeMode = () => {
	const { theme } = FUseTheme();
	const isDarkThemeMode = theme.themeMode === FThemeMode.DARK;

	return isDarkThemeMode;
};
