import { FIconProps } from "@innoplus-studio/fui-iconlib";
import { PropsWithChildren } from "react";
import {
	PropsWithCustomStyle,
	PropsWithDivRef,
	PropsWithOnClickFunction,
} from "../global.types";

export type FHeaderButtonTypes = "back" | "close" | "more";

export type FHeaderButtonProps = PropsWithChildren<unknown> &
	PropsWithCustomStyle &
	PropsWithOnClickFunction &
	PropsWithDivRef & {
		/** Three different header button types. */
		type?: FHeaderButtonTypes;
		/** Two different sizes. It is **only** active if `disableAutoResize` is `true`. */
		size?: "small" | "large";
		/** If `true`, the header button is **NOT** allowed to use. */
		disabled?: boolean;
		/** Properties of the icon. */
		iconProps?: FIconProps;
	};
