import { CSSProperties, ReactNode } from "react";
import { OnClickFunction } from "../global.types";

export interface FPopUpProps {
	popUpName?: string
	children?: ReactNode;
	onClose?: OnClickFunction;
	className?: string; 
	isDisableCloseWhenClickOutside?: boolean;
	overlayClassName?: string;
	overlayStyle?: CSSProperties;
	style?: CSSProperties;
}
