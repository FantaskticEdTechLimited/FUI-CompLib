import { FIcon, FIconNames } from "@fantaskticedtechlimited/fui-iconlib";
import React from "react";
import { FRwdModeHandler, FUseTheme } from "..";
import { RWDMode } from "../global.types";
import { FHeaderButtonProps, FHeaderButtonTypes } from "./types";

export const handleFHeaderButton = (props: FHeaderButtonProps) => {
	const rwdMode = FRwdModeHandler(props.configureRwdSize);
	const { theme } = FUseTheme();

	switch (props.type) {
		case FHeaderButtonTypes.BACK:
			return (
				<FIcon
					name={FIconNames.LEFT_ARROW}
					disabled={props.disabled}
					size={
						props.disableAutoResize
							? props.size
							: rwdMode === RWDMode.MOBILE
							? "small"
							: "large"
					}
					strokeColor={props.iconStrokeColor ?? theme.mainThemeColor}
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
							: rwdMode === RWDMode.MOBILE
							? "small"
							: "large"
					}
					strokeColor={props.iconStrokeColor ?? theme.mainThemeColor}
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
							: rwdMode === RWDMode.MOBILE
							? "small"
							: "large"
					}
					strokeColor={props.iconStrokeColor ?? theme.mainThemeColor}
				/>
			);
		default:
			return <></>;
	}
};
