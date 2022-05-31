import { CSSProperties, ReactElement, ReactNode } from "react";
import { FScrollBarProps } from "../FScrollBar/types";

export interface FScrollableContentWrapperProps {
	children: ReactElement | ReactNode;
	style?: CSSProperties;
	className?: string;
	scrollBarProps?: FScrollBarProps;
}
