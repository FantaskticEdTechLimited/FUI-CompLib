import React, { SVGProps, useRef } from "react";
import { FSearchBarClearIconProps } from "./types";
import { styles } from "./styles";
import { FJoinClassNames, FReturnColor } from "../..";
import { useHover } from "usehooks-ts";

export const ClearIcon = (props: FSearchBarClearIconProps) => {
	const { style, className, pathProps, onClick } = props;

	const hoverRef = useRef(null);
	const isHover = useHover(hoverRef);
	const defaultPathProps: SVGProps<SVGPathElement> = {
		stroke: FReturnColor({ color: isHover ? "Dark" : "Grey" }),
		strokeWidth: "1.2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		...(pathProps && pathProps({ isHover })),
	};

	return (
		<svg
			ref={hoverRef}
			style={style && style({ isHover })}
			className={FJoinClassNames([
				styles.clearIconDiv,
				className && className({ isHover }),
			])}
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onClick={() => onClick()}
		>
			<path d="M13.5 4.5L4.5 13.5" {...defaultPathProps} />
			<path d="M4.5 4.5L13.5 13.5" {...defaultPathProps} />
		</svg>
	);
};
