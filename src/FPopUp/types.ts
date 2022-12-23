import { PropsWithChildren } from "react";
import { FScrollBarStyleProps } from "../FScrollBarStyle/types";
import { FOnClickFunction, PropsWithCustomStyle } from "../global.types";

export type FPopUpProps = PropsWithCustomStyle &
	PropsWithChildren<unknown> & {
		/** If `true`, the popup will not be closed when user click outside of it. */
		disableCloseWhenClickOutside?: boolean;
		/** Close action event of the popup. */
		onClose?: FOnClickFunction;
		/** Class name of the overlay under the popup. */
		overlayClassName?: PropsWithCustomStyle["className"];
		/** Style of the overlay under the popup. */
		overlayStyle?: PropsWithCustomStyle["style"];
		/** Properties of the popup scroll bar. */
		scrollBarProps?: FScrollBarStyleProps;
	};
