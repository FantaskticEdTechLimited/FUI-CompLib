import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { FScrollBarProps } from "./types";

// not a FC, only applies css style
export const FScrollBarStyle = (props: FScrollBarProps) =>
	style({
		$nest: {
			"&::-webkit-scrollbar": {
				display: props.visible ? "block" : "none",
				width: props.width ?? "0.25rem",
				height: props.height ?? "0.25rem",
			},
			"&::-webkit-scrollbar-track": {
				borderRadius: props.trackBorderRadius ?? "0.625rem",
				backgroundColor: props.trackFillColor ?? "transparent",
				border: props.trackBorder ?? "0.0625rem solid transparent",
			},
			"&::-webkit-scrollbar-thumb": {
				borderRadius: props.thumbBorderRadius ?? "0.625rem",
				backgroundColor: props.thumbFillColor ?? FColorTypes.GREY,
				border: props.thumbBorder ?? "0.0625rem solid " + FColorTypes.GREY,
			},
			"&::-webkit-scrollbar-thumb:hover": {
				backgroundColor: props.thumbHoveredFillColor ?? FColorTypes.DARK_GREY,
				border:
					props.thumbHoveredBorder ??
					"0.0625rem solid " + FColorTypes.DARK_GREY,
			},
		},
	});
