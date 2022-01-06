import { CSSProperties, FunctionComponentElement } from "react";
import { OnClickFunction } from "../global.types";

export interface FSVGIconProps {
	children: FunctionComponentElement<"svg">;
	disabled?: boolean;
	className?: string;
	onClick?: OnClickFunction<void>;
	style?: CSSProperties;
}
