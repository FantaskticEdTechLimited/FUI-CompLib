import { CSSProperties, SVGProps } from "react";
import { FOnClickFunction } from "../../global.types";
import { FSearchBarInputState, InputStateProps } from "../types";

export interface FSearchBarSearchIconProps {
	/** Status of the search icon. */
	state?: InputStateProps;
	/** Search input value. */
	value?: string;
	/** Class name of the search icon. */
	className?: FSearchBarInputState<string>;
	/** Style of the search icon. */
	style?: FSearchBarInputState<CSSProperties>;
	/** Path properties of the search icon. */
	pathProps?: FSearchBarInputState<SVGProps<SVGPathElement>>;
}

export interface FSearchBarClearIconProps {
	/** Click action event of the clear icon. */
	onClick: FOnClickFunction;
	/** Class name of the clear icon. */
	className?: FSearchBarInputState<string>;
	/** Style of the clear icon. */
	style?: FSearchBarInputState<CSSProperties>;
	/** Path properties of the clear icon. */
	pathProps?: FSearchBarInputState<SVGProps<SVGPathElement>>;
}
