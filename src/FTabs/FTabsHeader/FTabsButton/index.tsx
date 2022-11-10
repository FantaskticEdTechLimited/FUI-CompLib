import React, { useState } from "react";
import { FText } from "../../../FText";
import { FReturnColor } from "../../../utils/FReturnColor";
import { FTabsButton_Div } from "./styles";
import { FTabsButtonProps } from "./types";

export const FTabsButton = (props: FTabsButtonProps) => {
	const [isHover, setIsHover] = useState<boolean>(false);
	const { isSelected, tabsKey, leadingComponent, actionComponent } = props;
	const status = {
		isSelected: isSelected,
		isHover: isHover,
		tabsKey: tabsKey,
	};

	return (
		<div
			style={props.style && props.style(status)}
			className={
				FTabsButton_Div(isSelected, isHover) +
				" " +
				(props.className && props.className(status))
			}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			onClick={props.onClick}
		>
			{leadingComponent && leadingComponent(status)}
			<FText
				color={() =>
					FReturnColor({ color: isSelected || isHover ? "Main" : "Grey" })
				}
				style={() => ({ width: "max-content" })}
				children={props.label}
				{...(props.labelProps && props.labelProps(status))}
			/>
			{actionComponent && actionComponent(status)}
		</div>
	);
};
