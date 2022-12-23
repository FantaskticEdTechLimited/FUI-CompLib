import { PropsWithCustomStyle } from "../../global.types";

export type FDnDButtonProps = PropsWithCustomStyle & {
	/** If `true`, the button is **NOT** allowed to use. */
	disabled?: boolean;
};
