import { PropsWithChildren } from "react";
import { PropsWithCustomStyle } from "../global.types";

export type FScrollableContainerProps = PropsWithCustomStyle &
	PropsWithChildren<unknown> & {
		/** If `true`, the container is changed to be scrolled horizontally,
		 * and the horizontal scroll bar will be shown.
		 */
		horizontal?: boolean;
	};
