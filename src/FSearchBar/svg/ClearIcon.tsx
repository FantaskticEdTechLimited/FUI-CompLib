import React from "react";
import { ClearIconProps } from "./types";
import * as styles from "./styles";
import { FUseColor } from "@fantaskticedtechlimited/fui-colorlib";
import { FCheckIsDarkMode } from "../..";

export const ClearIcon = (props: ClearIconProps) => {
	const greyColor = FUseColor({
		colorName: "Grey",
		isDarkMode: FCheckIsDarkMode(),
	});
	
	return (
		<svg
			style={props.style}
			className={styles.ClearIconDiv + " " + props.className}
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onClick={() => props.onClick()}
		>
			<path
				d="M13.5 4.5L4.5 13.5"
				stroke={greyColor}
				strokeWidth="1.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4.5 4.5L13.5 13.5"
				stroke={greyColor}
				strokeWidth="1.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
