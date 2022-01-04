import { CSSProperties } from "react";

export interface FSearchBarProps {
	placeholder: string;
	renderValue: (v: string) => void;
	value: string;
	clearIconClassName?: string
	clearIconStyle?: CSSProperties
	containerClassName?: string;
	containerStyle?: CSSProperties;
	inputAreaClassName?: string;
	inputAreaStyle?: CSSProperties;
	searchIconClassName?: string
	searchIconStyle?: CSSProperties
}
