import { style } from "typestyle";
import { FReturnColor } from "..";
import { FScrollBarStyleProps } from "./types";

/** `FScrollBarStyle` is not a component,
 * but a style function which can be applied on `className` of a component
 * to show a scrollbar with default or custom style for the overflow content.
 *
 * Props: `FScrollBarStyleProps`.
 *
 *  */
export const FScrollBarStyle = (props?: FScrollBarStyleProps) => {
	const greyColor = FReturnColor({ color: "Grey" });
	const darkColor = FReturnColor({ color: "Dark" });

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
