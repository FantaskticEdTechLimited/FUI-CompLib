import { CSSProperties, SVGProps } from "react";
import { OnClickFunction } from "../global.types";

export interface FSVGIconProps {
	children: SVGProps<SVGSVGElement>;
	disabled?: boolean;
	className?: string;
	onClick?: OnClickFunction<void>;
	style?: CSSProperties;
}
