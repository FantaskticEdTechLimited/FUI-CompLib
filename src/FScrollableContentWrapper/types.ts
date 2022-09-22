import { CSSProperties, ReactElement, ReactNode } from "react";
import { FScrollBarStyleProps } from "../FScrollBarStyle/types";

export interface FScrollableContentWrapperProps {
	children: ReactElement | ReactNode;
	style?: CSSProperties;
	className?: string;
	scrollBarProps?: FScrollBarStyleProps;
}
