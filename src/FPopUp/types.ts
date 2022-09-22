import { CSSProperties, ReactNode } from "react";
import { FScrollBarStyleProps } from "../FScrollBarStyle/types";
import { FOnClickFunction } from "../global.types";

export interface FPopUpProps {
	popUpName?: string;
	children?: ReactNode;
	onClose?: FOnClickFunction;
	className?: string;
	isDisableCloseWhenClickOutside?: boolean;
	overlayClassName?: string;
	overlayStyle?: CSSProperties;
	style?: CSSProperties;
	scrollBarProps?: FScrollBarStyleProps;
}
