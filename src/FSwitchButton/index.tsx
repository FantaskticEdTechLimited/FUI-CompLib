import React, { useState } from "react";
import { FReturnColor } from "..";
import { FSwitchButtonDiv } from "./styles";
import { FSwitchButtonProps } from "./types";

/**
 * `<FSwitchButton />` is a component which returns a button for toggle action.
 *
 * Props: `FSwitchButtonProps`.
 */
export const FSwitchButton = ({
	checked = true,
	disabled = false,
	...props
}: FSwitchButtonProps) => {
	const [isHover, setIsHover] = useState<boolean>(false);
	return (
		<div
			style={props.style && props.style(isHover)}
			className={
				FSwitchButtonDiv(checked, disabled) +
				" " +
				(props.className && props.className(isHover))
			}
			onClick={() => (disabled ? undefined : props.onClick && props.onClick())}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<svg
				style={props.svgStyle && props.svgStyle(isHover)}
				className={props.svgClassName && props.svgClassName(isHover)}
				width="18"
				height="18"
				overflow="visible"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					cx="9"
					cy="9"
					r="9"
					fill={FReturnColor({ color: "White" })}
					stroke={FReturnColor({ color: "Grey" })}
					strokeWidth="1.2"
					{...props.circleProps}
				/>
			</svg>
		</div>
	);
};
