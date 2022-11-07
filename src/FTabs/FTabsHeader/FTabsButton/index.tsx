import React, { useState } from "react";
import { FText } from "../../../FText";
import { FReturnColor } from "../../../utils/FReturnColor";
import { FTabsButton_Div } from "./styles";
import { FTabsButtonProps } from "./types";

export const FTabsButton = (props: FTabsButtonProps) => {
	const [isHover, setIsHover] = useState<boolean>(false);
	const { isSelected } = props;

	return (
		<div
			style={props.style && props.style(isHover)}
			className={
				FTabsButton_Div(isSelected, isHover) +
				" " +
				(props.className && props.className(isHover))
			}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			onClick={props.onClick}
		>
			<FText
				color={() =>
					FReturnColor({ color: isSelected || isHover ? "Main" : "Grey" })
				}
				style={() => ({ width: "max-content" })}
				children={props.label}
				{...props.labelProps}
			/>
		</div>
	);
};
