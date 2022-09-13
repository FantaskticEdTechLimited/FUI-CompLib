import { style } from "typestyle";
import { FUseColor } from "..";
import { FScrollBarProps } from "./types";

// not a FC, only applies css style
export const FScrollBarStyle = (props?: FScrollBarProps) => {
	const greyColor = FUseColor({
		colorName: "Grey",
	});
	const darkColor = FUseColor({
		colorName: "Dark",
	});

	return style({
		$nest: {
			"&::-webkit-scrollbar": {
				display: props?.disabled ? "none" : "block",
				width: props?.width ?? "4px",
				height: props?.height ?? "4px",
			},
			"&::-webkit-scrollbar-track": {
				borderRadius: props?.trackBorderRadius ?? "10px",
				backgroundColor: props?.trackFillColor ?? "transparent",
				borderWidth: props?.trackBorderWidth ?? "1px",
				borderStyle: "solid",
				borderColor: props?.trackBorderColor ?? "transparent",
				border: props?.trackBorder,
			},
			"&::-webkit-scrollbar-thumb": {
				borderRadius: props?.thumbBorderRadius ?? "10px",
				backgroundColor: props?.thumbFillColor ?? greyColor,
				borderWidth: props?.thumbBorderWidth ?? "1px",
				borderStyle: "solid",
				borderColor: props?.thumbBorderColor ?? greyColor,
				border: props?.thumbBorder,
			},
			"&::-webkit-scrollbar-thumb:hover": {
				backgroundColor: props?.thumbHoveredFillColor ?? darkColor,
				borderWidth: props?.thumbHoveredBorderWidth ?? "1px",
				borderStyle: "solid",
				borderColor: props?.thumbHoveredBorderColor ?? darkColor,
				border: props?.thumbHoveredBorder,
			},
		},
	});
};
