import { CSSProperties } from "react";
import { OnClickFunction, ThemeProps } from "../../global.types";

export interface SearchIconProps {
	isTriggered: boolean;
	inputValue: string;
	className?: string;
	style?: CSSProperties;
	themeProps?: ThemeProps
}

export interface ClearIconProps {
	onClick: OnClickFunction;
	className?: string;
	style?: CSSProperties;
}
