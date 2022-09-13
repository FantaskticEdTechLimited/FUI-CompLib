import { FIcon, FIconNames } from "@fantaskticedtechlimited/fui-iconlib";
import React from "react";
import { FRwdModeHandler, FUseColor } from "..";
import { FRWDMode } from "../global.types";
import { FHeaderButtonProps, FHeaderButtonTypes } from "./types";

export const handleFHeaderButton = (props: FHeaderButtonProps) => {
	const rwdMode = FRwdModeHandler(props.configureRwdSize);
	const mainThemeColor = FUseColor({ colorName: "Main" });

	switch (props.type) {
		case FHeaderButtonTypes.BACK:
			return (
				<FIcon
					name={FIconNames.LEFT_ARROW}
					disabled={props.disabled}
					size={
						props.disableAutoResize
							? props.size
							: rwdMode === FRWDMode.MOBILE
							? "small"
							: "large"
					}
					strokeColor={props.iconStrokeColor ?? mainThemeColor}
				/>
			);
		case FHeaderButtonTypes.CLOSE:
			return (
				<FIcon
					name={FIconNames.CLOSE}
					disabled={props.disabled}
					size={
						props.disableAutoResize
							? props.size
							: rwdMode === FRWDMode.MOBILE
							? "small"
							: "large"
					}
					strokeColor={props.iconStrokeColor ?? mainThemeColor}
				/>
			);
		case FHeaderButtonTypes.MORE:
			return (
				<FIcon
					name={FIconNames.MORE}
					disabled={props.disabled}
					size={
						props.disableAutoResize
							? props.size
							: rwdMode === FRWDMode.MOBILE
							? "small"
							: "large"
					}
					strokeColor={props.iconStrokeColor ?? mainThemeColor}
				/>
			);
		default:
			return <></>;
	}
};
