import React from "react";
import { FJoinClassNames } from "../utils/FJoinClassNames";
import { iconDiv } from "./styles";
import { FSVGIconProps } from "./types";

/**
 * `<FSVGIcon />` is a component for _svg_ icon.
 *
 * Props: `FSVGIconProps`.
 */
export const FSVGIcon = (props: FSVGIconProps) => {
	const { disabled = false, style, className, onClick, children } = props;

	return (
		<div
			style={style}
			className={FJoinClassNames([iconDiv(disabled), className])}
			onClick={() => (disabled ? undefined : onClick && onClick())}
		>
			{children}
		</div>
	);
};
