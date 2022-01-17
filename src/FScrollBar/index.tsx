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
				borderWidth: props.trackBorderWidth ?? "0.0625rem",
				borderStyle: "solid",
				borderColor: props.trackBorderColor ?? "transparent",
				border: props.trackBorder,
			},
			"&::-webkit-scrollbar-thumb": {
				borderRadius: props.thumbBorderRadius ?? "0.625rem",
				backgroundColor: props.thumbFillColor ?? FColorTypes.GREY,
				borderWidth: props.thumbBorderWidth ?? "0.0625rem",
				borderStyle: "solid",
				borderColor: props.thumbBorderColor ?? FColorTypes.GREY,
				border: props.thumbBorder,
			},
			"&::-webkit-scrollbar-thumb:hover": {
				backgroundColor: props.thumbHoveredFillColor ?? FColorTypes.DARK_GREY,
				borderWidth: props.thumbHoveredBorderWidth ?? "0.0625rem",
				borderStyle: "solid",
				borderColor: props.thumbHoveredBorderColor ?? FColorTypes.DARK_GREY,
				border: props.thumbHoveredBorder,
			},
		},
	});
