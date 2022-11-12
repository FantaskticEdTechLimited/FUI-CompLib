import { FIcon, FIconNames, FIconProps } from "@innoplus-studio/fui-iconlib";
import React from "react";
import { FReturnColor } from "..";
import { FHeaderButtonProps } from "./types";

export const handleFHeaderButton = (props: FHeaderButtonProps) => {
	const mainThemeColor = FReturnColor({ color: "Main" });
	const iconProps: Partial<FIconProps> = {
		disabled: props.disabled,
		size: props.size,
		color: (isHover) =>
			isHover ? FReturnColor({ color: "White" }) : mainThemeColor,
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
