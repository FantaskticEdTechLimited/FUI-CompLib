import React from "react";
import { FSVGIconDiv } from "./styles";
import { FSVGIconProps } from "./types";

/**
 * `<FSVGIcon />` is a component for _svg_ icon.
 *
 * Props: `FSVGIconProps`.
 */
export const FSVGIcon = ({ disabled = false, ...props }: FSVGIconProps) => {
	return (
		<div
			style={props.style}
			className={FSVGIconDiv(disabled) + " " + props.className}
			onClick={() => (disabled ? undefined : props.onClick && props.onClick())}
		>
			{props.children}
		</div>
	);
};
