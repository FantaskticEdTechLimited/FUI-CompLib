import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import React, { createContext, ElementType, useContext, useState } from 'react'
import { FTheme, FThemeContextProps } from "./types";


const defaultTheme:FTheme = {
	mainThemeColor: FColorTypes.FThemeColors.FTK_MAIN_THEME,
	subThemeColor: FColorTypes.FThemeColors.FTK_SUB_THEME,
}

const FThemeContext = createContext<FThemeContextProps>({
	theme: defaultTheme,
	setTheme: () => {},
});

export const useFUITheme = () => useContext(FThemeContext);
export const WithFUIThemeContext = (Component: ElementType, _theme?:FTheme) =>{
	return function WithFUIThemeContext(props: any) {
		const [theme, setTheme] = useState<FTheme>(_theme ?? defaultTheme)
		const defaultContextValue: FThemeContextProps = {
			theme,
			setTheme
		};
		return(
			<FThemeContext.Provider value={defaultContextValue}>
				<Component {...props} />
			</FThemeContext.Provider>
		);
	}
}

