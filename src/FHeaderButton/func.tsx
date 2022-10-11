import {
	FIcon,
	FIconNames,
	FIconProps,
} from "@fantaskticedtechlimited/fui-iconlib";
import React from "react";
import { FRwdModeHandler, FUseColor } from "..";
import { FRWDMode } from "../global.types";
import { FHeaderButtonProps } from "./types";

export const handleFHeaderButton = (props: FHeaderButtonProps) => {
	const rwdMode = FRwdModeHandler(props.configRwdSize);
	const mainThemeColor = FUseColor({ colorName: "Main" });
	const iconProps: Partial<FIconProps> = {
		disabled: props.disabled,
		size: props.disableAutoResize
			? props.size
			: rwdMode === FRWDMode.MOBILE
			? "small"
			: "large",
		color: (isHover) =>
			isHover ? FUseColor({ colorName: "White" }) : mainThemeColor,
		...props.iconProps,
	};

	switch (props.type) {
		case "Back":
			return <FIcon name={FIconNames.LEFT_ARROW} {...iconProps} />;
		case "Close":
			return <FIcon name={FIconNames.CLOSE} {...iconProps} />;
		case "More":
			return <FIcon name={FIconNames.MORE} {...iconProps} />;
		default:
			return <></>;
	}
};
