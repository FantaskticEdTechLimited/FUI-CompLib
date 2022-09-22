import { ReactNode } from "react";

export interface FScrollableContainerProps {
	/** If `true`, the scroll bar will be shown in horizontal.
	 * Otherwise, in vertical. */
	horizontal?: boolean;
	children: ReactNode;
}