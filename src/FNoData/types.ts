import { FComponentType, PropsWithCustomStyle } from "../global.types";

export type FNoDataProps = PropsWithCustomStyle & {
	/** Custom icon for warning. */
	icon?: FComponentType;
	/** Description for warning. */
	description?: string;
};
