import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
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
		mainThemeColor: {
			lightMode: FColorTypes.FThemeColors.MAIN.LM,
			darkMode: FColorTypes.FThemeColors.MAIN.DM,
		},
		subThemeColor: {
			lightMode: FColorTypes.FThemeColors.SUB.LM,
			darkMode: FColorTypes.FThemeColors.SUB.DM,
		},
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

		const setLocalStorageThemeMode = (isDarkMode: boolean) => {
			if (isDarkMode) localStorage.setItem("theme", "dark");
			else localStorage.setItem("theme", "light");
		};

		const setThemeColors = (themeColors: FThemeColors) => {
			let newTheme = { ...theme };
			newTheme.themeColors = themeColors;
			setTheme(newTheme);
		};

		const setThemeMode = (themeMode: FThemeMode) => {
			let newTheme = { ...theme };
			const isDarkMode = themeMode === FThemeMode.DARK;
			setLocalStorageThemeMode(isDarkMode);
			newTheme.themeMode = themeMode;
			setTheme(newTheme);
		};

		const defaultContextValue: FThemeContextProps = {
			theme: theme,
			setTheme: setTheme,
			setThemeColors,
			setThemeMode,
		};

		useEffect(() => {
			const isDefaultDarkMode = FCheckDefaultIsDarkMode();
			setLocalStorageThemeMode(isDefaultDarkMode);
			if (!_theme) {
				setTheme({
					themeMode: isDefaultDarkMode ? FThemeMode.DARK : FThemeMode.LIGHT,
					themeColors: {
						mainThemeColor: {
							lightMode: FColorTypes.FThemeColors.MAIN.LM,
							darkMode: FColorTypes.FThemeColors.MAIN.DM,
						},
						subThemeColor: {
							lightMode: FColorTypes.FThemeColors.SUB.LM,
							darkMode: FColorTypes.FThemeColors.SUB.DM,
						},
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
