import React from "react";
import { SearchIconProps } from "./types";
import * as styles from "./styles";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";

export const SearchIcon = (props: SearchIconProps) => {
	return (
		<svg
			style={props.style}
			className={styles.SearchIconDiv + " " + props.className}
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
				stroke={
					props.isTriggered
						? props.theme?.mainThemeColor
						: props.inputValue && props.inputValue.length > 0
						? FColorTypes.FPrimaryColors.BLACK
						: FColorTypes.FPrimaryColors.GREY
				}
				strokeWidth="1.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15.75 15.75L12.4875 12.4875"
				stroke={
					props.isTriggered
						? props.theme?.mainThemeColor
						: props.inputValue && props.inputValue.length > 0
						? FColorTypes.FPrimaryColors.BLACK
						: FColorTypes.FPrimaryColors.GREY
				}
				strokeWidth="1.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
