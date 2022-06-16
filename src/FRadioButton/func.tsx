import { FUseColor } from "@fantaskticedtechlimited/fui-colorlib";
import React from "react";
import { FCheckIsDarkMode, FGetThemeColor } from "..";
import { FRadioButtonProps } from "./types";

export const handleFRadioButton = (
	props: FRadioButtonProps,
	checked: boolean
) => {
	const mainThemeColor = FGetThemeColor("Main");
	const whiteColor = FUseColor({
		colorName: "White",
		isDarkMode: FCheckIsDarkMode(),
	});

	return checked ? (
		<>
			<path
				d="M23.2 12C23.2 18.1856 18.1856 23.2 12 23.2C5.81441 23.2 0.8 18.1856 0.8 12C0.8 5.81441 5.81441 0.8 12 0.8C18.1856 0.8 23.2 5.81441 23.2 12Z"
				fill={props.fillColor ?? whiteColor}
				stroke={props.strokeColor ?? mainThemeColor}
				strokeWidth={props.strokeWidth ?? "1.6"}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
				fill={props.strokeColor ?? mainThemeColor}
			/>
		</>
	) : (
		<path
			d="M23.4 12C23.4 18.296 18.296 23.4 12 23.4C5.70395 23.4 0.6 18.296 0.6 12C0.6 5.70395 5.70395 0.6 12 0.6C18.296 0.6 23.4 5.70395 23.4 12Z"
			fill={props.fillColor ?? whiteColor}
			stroke={
				props.strokeColor ??
				FUseColor({
					colorName: "BG Light",
					isDarkMode: FCheckIsDarkMode(),
				})
			}
			strokeWidth={props.strokeWidth ?? "1.2"}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	);
};
