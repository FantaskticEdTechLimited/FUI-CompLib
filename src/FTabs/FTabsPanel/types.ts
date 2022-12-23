import { PropsWithChildren } from "react";
import { PropsWithCustomStyle } from "../../global.types";

export type FTabsPanelProps = PropsWithChildren<unknown> &
	PropsWithCustomStyle & {
		/** Label of the tabs button. */
		label: string;
		/** Key value of the tabs button. */
		tabsKey: string;
	};
