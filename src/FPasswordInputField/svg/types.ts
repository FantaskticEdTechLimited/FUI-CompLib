import { CSSProperties } from "react"; 
import { OnClickFunction } from "../../global.types";

export interface FPasswordInputFieldIconProps {
	style?: CSSProperties;
	className?: string;
	disabled?: boolean;
	strokeColor?: string;
	strokeWidth?: string | number;
	onClick?: OnClickFunction;
}
