import { CSSProperties, ReactNode } from "react";

export interface FTextProps {
	children?: ReactNode;
	color?: string;
	font?: string;
	className?: string;
	maxRows?: number;
	style?: CSSProperties;
}
