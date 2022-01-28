import { FIcon, FIconTypes } from "@fantaskticedtechlimited/fui-iconlib";
import React from "react";
import { FRwdModeHandler } from "..";
import { defaultThemeProps, RWDMode } from "../global.types";
import { FHeaderButtonProps, FHeaderButtonTypes } from "./types";

export const handleFHeaderButton = (props: FHeaderButtonProps) => {
	const rwdMode = FRwdModeHandler(props.configureRwdSize);

	switch (props.type) {
		case FHeaderButtonTypes.BACK:
			return (
				<FIcon
					name={FIconTypes.LEFT_ARROW}
					disabled={props.disabled}
					size={
						props.disableAutoResize
							? props.size
							: rwdMode === RWDMode.MOBILE
							? "small"
							: "large"
					}
					strokeColor={
						props.iconStrokeColor ??
						props.themeProps?.mainTheme ??
						defaultThemeProps.mainTheme
					}
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
							: rwdMode === RWDMode.MOBILE
							? "small"
							: "large"
					}
					strokeColor={
						props.iconStrokeColor ??
						props.themeProps?.mainTheme ??
						defaultThemeProps.mainTheme
					}
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
							: rwdMode === RWDMode.MOBILE
							? "small"
							: "large"
					}
					strokeColor={
						props.iconStrokeColor ??
						props.themeProps?.mainTheme ??
						defaultThemeProps.mainTheme
					}
				/>
			);
		default:
			return <></>;
	}
};
