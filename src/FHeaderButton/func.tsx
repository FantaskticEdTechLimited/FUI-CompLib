import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FIcon, FIconTypes } from "@fantaskticedtechlimited/fui-iconlib";
import React from "react";
import { FScreenSizeHandler } from "..";
import { FHeaderButtonProps, FHeaderButtonTypes } from "./types";

export const handleFHeaderButton = (props: FHeaderButtonProps) => {
	const [screenWidth] = FScreenSizeHandler();
	switch (props.type) {
		case FHeaderButtonTypes.BACK:
			return (
				<FIcon
					name={FIconTypes.LEFT_ARROW}
					disabled={props.disabled}
					size={
						props.disableAutoResize
							? props.size
							: screenWidth < 720 // mobile version
							? "small"
							: "large"
					}
					strokeColor={props.iconStrokeColor ?? FColorTypes.BRAND}
				/>
			);
		case FHeaderButtonTypes.CLOSE:
			return (
				<FIcon
					name={FIconTypes.CLOSE}
					disabled={props.disabled}
					size={
						props.disableAutoResize
							? props.size
							: screenWidth < 720 // mobile version
							? "small"
							: "large"
					}
					strokeColor={props.iconStrokeColor ?? FColorTypes.BRAND}
				/>
			);
		case FHeaderButtonTypes.MORE:
			return (
				<FIcon
					name={FIconTypes.MORE}
					disabled={props.disabled}
					size={
						props.disableAutoResize
							? props.size
							: screenWidth < 720 // mobile version
							? "small"
							: "large"
					}
					strokeColor={props.iconStrokeColor ?? FColorTypes.BRAND}
				/>
			);
		default:
			return <></>;
	}
};
