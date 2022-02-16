export interface FTheme {
	mainThemeColor: string;
	subThemeColor: string;
}

export interface FThemeContextProps {
	theme: FTheme;
	setTheme: (theme: FTheme) => void;
};
