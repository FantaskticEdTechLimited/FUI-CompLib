import { CSSProperties } from "react";
import { FComponentType } from "../global.types";

export interface FNoDataProps {
	/** Custom icon for warning. */
	icon?: FComponentType;
	/** Description for warning. */
	description?: string;
	/** Class name of the warning container. */
	className?: string;
	/** Style of the warning container. */
	style?: CSSProperties;
}
