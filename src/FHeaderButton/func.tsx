import { FIcon, FIconNames } from "@fantaskticedtechlimited/fui-iconlib";
import React from "react";
import { FRwdModeHandler, FUseColor } from "..";
import { FRWDMode } from "../global.types";
import { FHeaderButtonProps } from "./types";

export const handleFHeaderButton = (props: FHeaderButtonProps) => {
	const rwdMode = FRwdModeHandler(props.configRwdSize);
	const mainThemeColor = FUseColor({ colorName: "Main" });

	switch (props.type) {
		case "Back":
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
					strokeWidth={props.iconStrokeWidth}
					{...props.iconProps}
				/>
			);
		case "Close":
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
					strokeWidth={props.iconStrokeWidth}
					{...props.iconProps}
				/>
			);
		case "More":
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
					strokeWidth={props.iconStrokeWidth}
					{...props.iconProps}
				/>
			);
		default:
			return <></>;
	}
};
