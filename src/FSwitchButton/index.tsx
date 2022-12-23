import React from "react";
import { FJoinClassNames, FReturnColor } from "..";
import { buttonDiv } from "./styles";
import { FSwitchButtonProps } from "./types";

/**
 * `<FSwitchButton />` is a component which returns a button for toggle action.
 *
 * Props: `FSwitchButtonProps`.
 */
export const FSwitchButton = (props: FSwitchButtonProps) => {
	const {
		ref: hoverRef,
		ref,
		checked = true,
		disabled = false,
		style,
		svgStyle,
		className,
		svgClassName,
		onClick,
		circleProps,
	} = props;

	return (
		<div
			ref={hoverRef}
			style={style}
			className={FJoinClassNames([buttonDiv(checked, disabled), className])}
			onClick={() => (disabled ? undefined : onClick && onClick())}
		>
			<svg
				ref={ref}
				style={svgStyle}
				className={svgClassName}
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
					{...circleProps}
				/>
			</svg>
		</div>
	);
};
