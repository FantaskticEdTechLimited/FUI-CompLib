import { CSSProperties } from "react";
import {
	FSearchBarClearIconProps,
	FSearchBarSearchIconProps,
} from "./svg/types";

export type FSearchBarInputState<T> = (state: {
	isHover: boolean;
	isTriggered: boolean;
	isFilled: boolean;
}) => T;

export interface FSearchBarProps {
	/** Placeholder of the input. */
	placeholder?: string;
	/** Search input value. */
	value: string;
	/** Returns the input value. */
	onInput: (data: string) => void;
	/** Class name of the search bar. */
	className?: FSearchBarInputState<string>;
	/** Style of the search bar. */
	style?: FSearchBarInputState<CSSProperties>;
	/** Class name of the input. */
	inputClassName?: FSearchBarInputState<string>;
	/** Style of the input. */
	inputStyle?: FSearchBarInputState<CSSProperties>;
	/** Properties of the clear icon. */
	clearIconProps?: FSearchBarInputState<FSearchBarClearIconProps>;
	/** Properties of the search icon. */
	searchIconProps?: FSearchBarInputState<FSearchBarSearchIconProps>;
}
