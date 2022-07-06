export enum FThemeMode {
	LIGHT = "light",
	DARK = "dark",
}

/**
 * The light and dark mode colors of the main and sub theme colors
 */
export interface FThemeColorWithModeProps {
	lightMode: string;
	darkMode: string;
}

export interface FThemeColors {
	mainThemeColor: FThemeColorWithModeProps;
	subThemeColor: FThemeColorWithModeProps;
}

export interface FTheme {
	themeColors: FThemeColors;
	themeMode: FThemeMode;
}

export interface FThemeContextProps {
	theme: FTheme;
	setTheme: (theme: FTheme) => void;
	setThemeColors: (themeColors: FThemeColors) => void;
	setThemeMode: (themeMode: FThemeMode) => void;
}
