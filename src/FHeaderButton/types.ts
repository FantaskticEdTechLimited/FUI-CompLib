import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib";
import { CSSProperties } from "react";
import { FComponentType, FOnClickFunction } from "../global.types";

export type FHeaderButtonTypes = "Back" | "Close" | "More";

export interface FHeaderButtonProps {
	/** Three different header button types. */
	type?: FHeaderButtonTypes;
	/** Two different sizes. It is **only** active if `disableAutoResize` is `true`. */
	size?: "small" | "large";
	/** If `true`, the header button is **NOT** allowed to use. */
	disabled?: boolean;
	/** Content of the header button. */
	children?: FComponentType;
	/** Click action event of the header button. */
	onClick?: FOnClickFunction;
	/** Properties of the icon. */
	iconProps?: FIconProps;
	/** Class name of the header button. */
	className?: (isHover?: boolean) => string;
	/** Style of the header button. */
	style?: (isHover?: boolean) => CSSProperties;
}
