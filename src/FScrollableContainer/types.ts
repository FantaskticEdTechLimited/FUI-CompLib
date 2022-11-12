import { CSSProperties, ReactNode } from "react";

export interface FScrollableContainerProps {
	/** If `true`, the container is changed to be scrolled horizontally,
	 * and the horizontal scroll bar will be shown.
	 */
	horizontal?: boolean;
	/** Content of the container. */
	children: ReactNode;
	/** Style of the container. */
	style?: CSSProperties;
	/** Class name of the container. */
	className?: string;
}
