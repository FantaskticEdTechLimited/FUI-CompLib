import { CSSProperties } from "react";
import {
	FSearchBarClearIconProps,
	FSearchBarSearchIconProps,
} from "./svg/types";

export interface FSearchBarProps {
	/** Placeholder of the input. */
	placeholder?: string;
	/** Search input value. */
	value?: string;
	/** Returns the input value. */
	onInput?: (data: string) => void;
	/** Class name of the search bar. */
	className?: string;
	/** Style of the search bar. */
	style?: CSSProperties;
	/** Class name of the input. */
	inputClassName?: string;
	/** Style of the input. */
	inputStyle?: CSSProperties;
	/** Properties of the clear icon. */
	clearIconProps?: FSearchBarClearIconProps;
	/** Properties of the search icon. */
	searchIconProps?: FSearchBarSearchIconProps;
}
