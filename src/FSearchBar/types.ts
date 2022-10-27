import { CSSProperties } from "react";
import {
	FSearchBarClearIconProps,
	FSearchBarSearchIconProps,
} from "./svg/types";

export interface InputStateProps {
	isHover?: boolean;
	isTriggered?: boolean;
	isFilled?: boolean;
}

export type FSearchBarInputState<T> = (state: InputStateProps) => T;

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
