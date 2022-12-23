import { FIconProps } from "@innoplus-studio/fui-iconlib";
import { RefAttributes } from "react";
import { FButtonProps } from "../FButton/types";

export type FLinkButtonProps = FButtonProps & {
	ref?: RefAttributes<HTMLAnchorElement>["ref"];
	/** Path link name to link with another route. */
	pathLink?: string;
	/** Whether the button is selected or clicked. */
	isPathSelected?: boolean;
	/** Properties of the leading icon. */
	leadingIconProps?: FIconProps;
	/** Properties of the action icon. */
	actionIconProps?: FIconProps;
	/** Whether the route has own child routes. */
	isContainRouteChildren?: boolean;
};
