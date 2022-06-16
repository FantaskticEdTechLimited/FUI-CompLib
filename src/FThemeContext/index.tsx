import { FColorTypes, FUseColor } from "@fantaskticedtechlimited/fui-colorlib";
import React, {
	createContext,
	ElementType,
	useContext,
	useEffect,
	useState,
} from "react";
import { FCheckDefaultIsDarkMode } from "..";
import { FThemeContextProps, FTheme, FThemeMode, FThemeColors } from "./types";

const defaultTheme: FTheme = {
	themeMode: FThemeMode.LIGHT,
	themeColors: {
		mainThemeColor: FColorTypes.FThemeColors.MAIN.LM,
		subThemeColor: FColorTypes.FThemeColors.SUB.LM,
	},
};

const FThemeContext = createContext<FThemeContextProps>({
	theme: defaultTheme,
	setTheme: () => {},
	setThemeColors: () => {},
	setThemeMode: () => {},
});

export const useFUITheme = () => useContext(FThemeContext);
export const WithFUIThemeContext = (
	Component: ElementType,
	_theme?: FTheme
) => {
	return function WithFUIThemeContext(props: any) {
		const [theme, setTheme] = useState<FTheme>(_theme ?? defaultTheme);

		const setThemeColors = (themeColors: FThemeColors) => {
			let newTheme = { ...theme };
			newTheme.themeColors = themeColors;
			setTheme(newTheme);
		};

		const setThemeMode = (themeMode: FThemeMode) => {
			let newTheme = { ...theme };
			newTheme.themeMode = themeMode;
			// need also change the theme color based on the theme mode
			newTheme.themeColors = {
				mainThemeColor: FUseColor({
					colorName: "Main",
					isDarkMode: themeMode === FThemeMode.DARK,
				}),
				subThemeColor: FUseColor({
					colorName: "Sub",
					isDarkMode: themeMode === FThemeMode.DARK,
				}),
			};
			setTheme(newTheme);
		};

		const defaultContextValue: FThemeContextProps = {
			theme: theme,
			setTheme,
			setThemeColors,
			setThemeMode,
		};

		useEffect(() => {
			const isDefaultDarkMode = FCheckDefaultIsDarkMode();
			if (isDefaultDarkMode) {
				localStorage.setItem("theme", "dark");
				setTheme({
					themeMode: FThemeMode.DARK,
					themeColors: {
						mainThemeColor: FColorTypes.FThemeColors.MAIN.DM,
						subThemeColor: FColorTypes.FThemeColors.SUB.DM,
					},
				});
			} else {
				localStorage.setItem("theme", "light");
				setTheme({
					themeMode: FThemeMode.LIGHT,
					themeColors: {
						mainThemeColor: FColorTypes.FThemeColors.MAIN.LM,
						subThemeColor: FColorTypes.FThemeColors.SUB.LM,
					},
				});
			}
		}, []);

		return (
			<FThemeContext.Provider value={defaultContextValue}>
				<Component {...props} />
			</FThemeContext.Provider>
		);
	};
};
