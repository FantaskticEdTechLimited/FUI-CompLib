import { FIconProps } from "@innoplus-studio/fui-iconlib";
import { FButtonProps } from "../FButton/types";

export interface FLinkButtonProps extends FButtonProps {
	/** Path link name to link with another route. */
	pathLink?: string;
	/** Whether the button is selected or clicked. */
	pathIsSelected?: boolean;
	/** Properties of the leading icon. */
	leadingIconProps?: FIconProps;
	/** Properties of the action icon. */
	actionIconProps?: FIconProps;
	/** Whether the route has own child routes. */
	containsRouteChildren?: boolean;
}
