import React from "react";
import { FJoinClassNames } from "../utils/FJoinClassNames";
import { handleFCheckBox } from "./helper";
import { checkBoxDiv } from "./styles";
import { FCheckBoxProps } from "./types";

/** `<FCheckBox />` is a component for checking an item.
 *
 * Props: `FCheckBoxProps`.
 */
export const FCheckBox = (props: FCheckBoxProps) => {
	const {
		ref,
		type = "round",
		checked = true,
		disabled = false,
		style,
		className,
		fillColor,
		iconColor,
		borderColor,
		strokeWidth,
		onClick,
	} = props;

	return (
		<svg
			ref={ref}
			style={style}
			className={FJoinClassNames([checkBoxDiv(disabled), className])}
			onClick={() => (disabled ? undefined : onClick && onClick())}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{handleFCheckBox({
				type,
				checked,
				fillColor,
				iconColor,
				borderColor,
				strokeWidth,
			})}
		</svg>
	);
};
