import { CSSProperties } from "react";

export interface FTextProps {
	children?: string;
	color?: string;
	font?: string;
	className?: string;
	maxRows?: number;
	style?: CSSProperties;
}
