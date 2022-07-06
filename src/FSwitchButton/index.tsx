import React from "react";
import { FUseColor } from "..";
import * as styles from "./styles";
import { FSwitchButtonProps } from "./types";

export const FSwitchButton = (props: FSwitchButtonProps) => {
	const checked = props.checked ?? true; // default checked

	return (
		<div
			style={props.containerStyle}
			className={
				styles.FSwitchButtonDiv(props, checked) + " " + props.containerClassName
			}
			onClick={() =>
				props.disabled ? undefined : props.onClick && props.onClick()
			}
		>
			<svg
				style={props.svgStyle}
				className={props.svgClassName}
				width="18"
				height="18"
				overflow="visible"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					cx={props.circleCx ?? "9"}
					cy={props.circleCy ?? "9"}
					r={props.circleR ?? "9"}
					fill={
						props.circleColor ??
						FUseColor({
							colorName: "White",
						})
					}
					stroke={
						props.circleBorderColor ??
						FUseColor({
							colorName: "Grey",
						})
					}
					strokeWidth={props.circleStrokeWidth ?? "1.2"}
				/>
			</svg>
		</div>
	);
};
