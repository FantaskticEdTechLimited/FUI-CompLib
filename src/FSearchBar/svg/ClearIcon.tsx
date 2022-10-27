import React, { SVGProps, useState } from "react";
import { FSearchBarClearIconProps } from "./types";
import { styles } from "./styles";
import { FReturnColor } from "../..";

export const ClearIcon = (props: FSearchBarClearIconProps) => {
	const [isHover, setIsHover] = useState<boolean>(false);

	const pathProps: SVGProps<SVGPathElement> = {
		stroke: FReturnColor({ color: isHover ? "Dark" : "Grey" }),
		strokeWidth: "1.2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		...(props.pathProps && props.pathProps({ isHover })),
	};

	return (
		<svg
			style={props.style && props.style({ isHover })}
			className={
				styles.ClearIconDiv +
				" " +
				(props.className && props.className({ isHover }))
			}
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onClick={() => props.onClick()}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<path d="M13.5 4.5L4.5 13.5" {...pathProps} />
			<path d="M4.5 4.5L13.5 13.5" {...pathProps} />
		</svg>
	);
};
