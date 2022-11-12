import React from "react";
import { handleFRadioButton } from "./func";
import { FRadioButtonDiv } from "./styles";
import { FRadioButtonProps } from "./types";

/**
 * `<FRadioButton />` is a component for selection in radio type.
 *
 * Props: `FRadioButtonProps`.
 */
export const FRadioButton = ({
	checked = true,
	disabled = false,
	...props
}: FRadioButtonProps) => {
	const param: Partial<FRadioButtonProps> = {
		checked: checked,
		disabled: disabled,
		...props,
	};

	return (
		<svg
			style={props.style}
			className={FRadioButtonDiv(disabled) + " " + props.className}
			onClick={() => (disabled ? undefined : props.onClick && props.onClick())}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{handleFRadioButton(param)}
		</svg>
	);
};
