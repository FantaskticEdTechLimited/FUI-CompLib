import { CSSProperties, SVGProps } from "react";
import { FOnClickFunction } from "../global.types";

export interface FSVGIconProps {
	children: SVGProps<SVGSVGElement>;
	disabled?: boolean;
	className?: string;
	onClick?: FOnClickFunction;
	style?: CSSProperties;
}
