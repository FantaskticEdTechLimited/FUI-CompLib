import React, { useRef } from "react";
import { useHover } from "usehooks-ts";
import { FText } from "../../../FText";
import { FJoinClassNames } from "../../../utils/FJoinClassNames";
import { FReturnColor } from "../../../utils/FReturnColor";
import { buttonDiv } from "./styles";
import { FTabsButtonProps } from "./types";

export const FTabsButton = (props: FTabsButtonProps) => {
	const {
		style,
		className,
		onClick,
		ref: ref,
		label,
		labelProps,
		isSelected,
		tabsKey,
		leadingComponent,
		actionComponent,
	} = props;

	const hoverRef = useRef(null);
	const isHover = useHover(hoverRef);
	const status = {
		isSelected: isSelected,
		isHover: isHover,
		tabsKey: tabsKey,
	};

	return (
		<div
			ref={ref ?? hoverRef}
			style={style && style(status)}
			className={FJoinClassNames([
				buttonDiv(isSelected, isHover),
				className && className(status),
			])}
			onClick={onClick}
		>
			{leadingComponent && leadingComponent(status)}
			<FText
				color={FReturnColor({ color: isSelected || isHover ? "Main" : "Grey" })}
				style={{ width: "max-content" }}
				children={label}
				{...(labelProps && labelProps(status))}
			/>
			{actionComponent && actionComponent(status)}
		</div>
	);
};
