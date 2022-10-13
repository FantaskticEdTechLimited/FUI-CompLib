import { CSSProperties, SVGProps } from "react";
import { FOnClickFunction } from "../../global.types";

export interface FSearchBarSearchIconProps {
	/** Trigger status of the search icon. */
	isTriggered: boolean;
	/** Search input value. */
	value: string;
	/** Class name of the search icon. */
	className?: string;
	/** Style of the search icon. */
	style?: CSSProperties;
	/** Path properties of the search icon. */
	pathProps?: SVGProps<SVGPathElement>;
}

export interface FSearchBarClearIconProps {
	/** Click action event of the clear icon. */
	onClick: FOnClickFunction;
	/** Class name of the clear icon. */
	className?: string;
	/** Style of the clear icon. */
	style?: CSSProperties;
	/** Path properties of the clear icon. */
	pathProps?: SVGProps<SVGPathElement>;
}
