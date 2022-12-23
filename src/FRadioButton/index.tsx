import React from "react";
import { FJoinClassNames } from "../utils/FJoinClassNames";
import { getIcon } from "./helper";
import { radioButtonDiv } from "./styles";
import { FRadioButtonProps } from "./types";

/**
 * `<FRadioButton />` is a component for selection in radio type.
 *
 * Props: `FRadioButtonProps`.
 */
export const FRadioButton = (props: FRadioButtonProps) => {
	const {
		checked = true,
		disabled = false,
		color,
		fillColor,
		strokeWidth,
		style,
		className,
		onClick,
	} = props;
	const icon = getIcon({ checked, color, fillColor, strokeWidth });

	return (
		<svg
			style={style}
			className={FJoinClassNames([radioButtonDiv(disabled), className])}
			onClick={() => (disabled ? undefined : onClick && onClick())}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{icon}
		</svg>
	);
};
