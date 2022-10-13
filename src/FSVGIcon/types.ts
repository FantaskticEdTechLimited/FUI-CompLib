import { CSSProperties, SVGProps } from "react";
import { FOnClickFunction } from "../global.types";

export interface FSVGIconProps {
	/** If `true`, the svg icon is **NOT** able to use. */
	disabled?: boolean;
	/** Click action event of the svg icon. */
	onClick?: FOnClickFunction;
	/** Content of the svg icon in `SVGSVGElement` type. */
	children: SVGProps<SVGSVGElement>;
	/** Class name of the svg icon. */
	className?: string;
	/** Style of the svg icon. */
	style?: CSSProperties;
}
