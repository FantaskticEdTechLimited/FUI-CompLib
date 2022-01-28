import { CSSProperties } from "react";
import { ThemeProps } from "../global.types";

export interface FSearchBarProps {
	placeholder?: string;
	renderInputValue?: (data: string) => void;
	inputValue?: string;
	clearIconClassName?: string
	clearIconStyle?: CSSProperties
	containerClassName?: string;
	containerStyle?: CSSProperties;
	inputAreaClassName?: string;
	inputAreaStyle?: CSSProperties;
	searchIconClassName?: string
	searchIconStyle?: CSSProperties
	themeProps?: ThemeProps
}
