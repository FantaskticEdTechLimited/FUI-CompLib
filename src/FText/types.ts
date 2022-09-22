import { CSSProperties, ReactNode } from "react";

export interface FTextProps {
	/** Text content. */
	children?: ReactNode;
	/** Text color. */
	color?: string;
	/** Text Font style. */
	font?: string;
	/** Maximum rows of text to be shown.
	 *
	 * **Use with `overflowHidden`.** */
	maxRows?: number;
	/** If `true`, the overflow text will be hidden.
	 *
	 * **Use with `maxRows`.** */
	overflowHidden?: boolean;
	/** Class name to change text style. */
	className?: string;
	/** Style to change text style. */
	style?: CSSProperties;
}
