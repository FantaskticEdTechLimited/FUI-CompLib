import { CSSProperties } from "react";
import {
	FSearchBarClearIconProps,
	FSearchBarSearchIconProps,
} from "./svg/types";

export type FSearchBarRenderProperty<T> = (
	isHover?: boolean,
	isTriggered?: boolean
) => T;

export interface FSearchBarProps {
	/** Placeholder of the input. */
	placeholder?: string;
	/** Search input value. */
	value: string;
	/** Returns the input value. */
	onInput: (data: string) => void;
	/** Class name of the search bar. */
	className?: FSearchBarRenderProperty<string>;
	/** Style of the search bar. */
	style?: FSearchBarRenderProperty<CSSProperties>;
	/** Class name of the input. */
	inputClassName?: FSearchBarRenderProperty<string>;
	/** Style of the input. */
	inputStyle?: FSearchBarRenderProperty<CSSProperties>;
	/** Properties of the clear icon. */
	clearIconProps?: FSearchBarRenderProperty<FSearchBarClearIconProps>;
	/** Properties of the search icon. */
	searchIconProps?: FSearchBarRenderProperty<FSearchBarSearchIconProps>;
}
