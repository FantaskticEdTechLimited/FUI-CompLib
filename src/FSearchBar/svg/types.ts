import { CSSProperties } from "react";
import { FTheme } from "../..";
import { OnClickFunction } from "../../global.types";

export interface SearchIconProps {
	isTriggered: boolean;
	inputValue: string;
	className?: string;
	style?: CSSProperties;
	theme?: FTheme
}

export interface ClearIconProps {
	onClick: OnClickFunction;
	className?: string;
	style?: CSSProperties;
}
