import { FIcon, FIconNames, FIconProps } from "@innoplus-studio/fui-iconlib";
import React from "react";
import { FReturnColor } from "..";
import { FHeaderButtonProps } from "./types";

export const getIcon = (props: FHeaderButtonProps) => {
	const { disabled, size, iconProps, type } = props;

	const mainThemeColor = FReturnColor({ color: "Main" });
	const defaultIconProps: Partial<FIconProps> = {
		disabled: disabled,
		size: size,
		color: (isHover) =>
			isHover ? FReturnColor({ color: "White" }) : mainThemeColor,
		...iconProps,
	};

	switch (type) {
		case "back":
			return <FIcon name={FIconNames.LEFT_ARROW} {...defaultIconProps} />;
		case "close":
			return <FIcon name={FIconNames.CLOSE} {...defaultIconProps} />;
		case "more":
			return <FIcon name={FIconNames.MORE} {...defaultIconProps} />;
		default:
			return <></>;
	}
};
