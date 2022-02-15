import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { createContext, useContext } from "react";

export interface FTheme {
	mainThemeColor: string;
	subThemeColor: string;
}

export type FThemeContextType = {
	theme: FTheme;
	setTheme: (theme: FTheme) => void;
};

export const FDefaultThemeContext: FThemeContextType = {
	theme: {
		mainThemeColor: FColorTypes.DEFAULT_MAIN_THEME,
		subThemeColor: FColorTypes.DEFAULT_SUB_THEME,
	},
	setTheme: () => {},
};

export const FThemeContext =
	createContext<FThemeContextType>(FDefaultThemeContext);

export const FUseTheme = () => useContext(FThemeContext);
