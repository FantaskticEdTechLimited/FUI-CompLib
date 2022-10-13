import React, { useState } from "react";
import { handleFCheckBox } from "./func";
import { FCheckBoxDiv } from "./styles";
import { FCheckBoxProps } from "./types";

/** `<FCheckBox />` is a component for checking an item.
 *
 * Props: `FCheckBoxProps`. 
 */
export const FCheckBox = ({
	type = "round",
	checked = true,
	disabled = false,
	...props
}: FCheckBoxProps) => {
	const [isHover, setIsHover] = useState<boolean>(false);
	const param: FCheckBoxProps = {
		type: type,
		checked: checked,
		disabled: disabled,
		...props,
	};

	return (
		<svg
			style={props.style && props.style(isHover)}
			className={
				FCheckBoxDiv(disabled) +
				" " +
				(props.className && props.className(isHover))
			}
			onClick={() => (disabled ? undefined : props.onClick())}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			{handleFCheckBox(param)}
		</svg>
	);
};
