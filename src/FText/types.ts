import { PropsWithChildren } from "react";
import { PropsWithCustomStyle, PropsWithDivRef } from "../global.types";

export type FTextProps = PropsWithChildren<unknown> &
	PropsWithCustomStyle &
	PropsWithDivRef & {
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
	};
