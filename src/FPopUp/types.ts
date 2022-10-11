import { CSSProperties, ReactNode } from "react";
import { FScrollBarStyleProps } from "../FScrollBarStyle/types";
import { FOnClickFunction } from "../global.types";

export interface FPopUpProps {
	/** If `true`, the popup will not be closed when user click outside of it. */
	disableCloseWhenClickOutside?: boolean;
	/** Content of the popup. */
	children?: ReactNode;
	/** Close action event of the popup. */
	onClose?: FOnClickFunction;
	/** Class name of the overlay under the popup. */
	overlayClassName?: string;
	/** Style of the overlay under the popup. */
	overlayStyle?: CSSProperties;
	/** Class name of the popup container. */
	className?: string;
	/** Style of the popup container. */
	style?: CSSProperties;
	/** Properties of the popup scroll bar. */
	scrollBarProps?: FScrollBarStyleProps;
}
