export enum FThemeMode {
	LIGHT = "light",
	DARK = "dark",
}

export interface FThemeColors {
	mainThemeColor: string;
	subThemeColor: string;
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
