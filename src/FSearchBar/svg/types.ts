import { CSSProperties } from "react";
import { OnClickFunction } from "../../global.types";

export interface SearchIconProps {
	isTriggered: boolean;
	value: string;
	className?: string;
	style?: CSSProperties;
}

export interface ClearIconProps {
	onClick: OnClickFunction<void>;
	className?: string;
	style?: CSSProperties;
}
