import { CSSProperties, FunctionComponentElement } from "react";
import { OnClickFunction } from "../global.types";

export interface FSVGButtonProps {
	children: FunctionComponentElement<"svg">;
	onClick: OnClickFunction<void>;
	disabled?: boolean;
	className?: string;
	style?: CSSProperties;
}
