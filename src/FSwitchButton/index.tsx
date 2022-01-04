import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import React from "react";
import * as styles from "./styles";
import { FSwitchButtonProps } from "./types";

export const FSwitchButton = (props: FSwitchButtonProps) => {
	return (
		<div
			style={props.containerStyle}
			className={props.containerClassName + " " + styles.FSwitchButtonDiv(props)}
			onClick={() => (props.disabled ? undefined : props.onClick())}
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
					fill={props.circleColor ?? FColorTypes.PURE_WHITE}
					stroke={
						props.circleBorderColor ?? props.checked
							? FColorTypes.BLACK
							: FColorTypes.LIGHT_GREY
					}
					strokeWidth={props.circleStrokeWidth ?? "1.2"}
				/>
			</svg>
		</div>
	);
};
