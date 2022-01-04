import React from "react";
import { SearchIconProps } from "./types";
import * as styles from "./styles";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";

export const SearchIcon = (props: SearchIconProps) => {
	return (
		<svg
			style={props.style}
			className={props.className + " " + styles.SearchIconDiv}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
				stroke={
					props.isTriggered
						? FColorTypes.BRAND
						: props.value !== ""
						? FColorTypes.BLACK
						: FColorTypes.GREY
				}
				strokeWidth="1.6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M21 21L16.65 16.65"
				stroke={
					props.isTriggered
						? FColorTypes.BRAND
						: props.value !== ""
						? FColorTypes.BLACK
						: FColorTypes.GREY
				}
				strokeWidth="1.6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
