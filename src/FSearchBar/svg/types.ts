import { CSSProperties } from "react";

import { FOnClickFunction } from "../../global.types";

export interface SearchIconProps {
	isTriggered: boolean;
	inputValue: string;
	className?: string;
	style?: CSSProperties;
}

export interface ClearIconProps {
	onClick: FOnClickFunction;
	className?: string;
	style?: CSSProperties;
}
