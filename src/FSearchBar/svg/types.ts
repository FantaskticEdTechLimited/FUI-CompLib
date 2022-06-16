import { CSSProperties } from "react";

import { OnClickFunction } from "../../global.types";

export interface SearchIconProps {
	isTriggered: boolean;
	inputValue: string;
	className?: string;
	style?: CSSProperties;
}

export interface ClearIconProps {
	onClick: OnClickFunction;
	className?: string;
	style?: CSSProperties;
}
