import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import React from "react";
import { FPasswordInputFieldIconProps } from "./types";
import * as styles from "./styles"

export const EyeIcon = (props: FPasswordInputFieldIconProps) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={props.style}
			className={props.className+" "+styles.FPasswordInputFieldEyeIcon(props.disabled!)}
			onClick={() => props.disabled ? undefined : props.onClick && props.onClick()}
		>
			<path
				d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
				stroke={props.strokeColor ?? FColorTypes.PRIMARY_BLACK}
				strokeWidth={props.strokeWidth ?? "2"}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
				stroke={props.strokeColor ?? FColorTypes.PRIMARY_BLACK}
				strokeWidth={props.strokeWidth ?? "2"}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
