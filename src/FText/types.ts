import { CSSProperties, ReactNode } from "react";
import { FOnHoverProperty } from "../global.types";

export interface FTextProps {
	/** Text content. */
	children?: ReactNode;
	/** Text color. */
	color?: FOnHoverProperty<string>;
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
	/** Class name of the text. */
	className?: FOnHoverProperty<string>;
	/** Style of text. */
	style?: FOnHoverProperty<CSSProperties>;
}
