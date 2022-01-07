import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib";
import { CSSProperties, ReactElement } from "react";
import { FSVGIconProps } from "../FSVGIcon/types";
import { FButtonProps } from "../global.types";


export interface FLinkButtonProps extends FButtonProps {
	pathLink?: string;
	pathIsSelected?: boolean;

    // user can declare own action component or icon
    actionComponent?: ReactElement<FSVGIconProps>
	actionIcon?: FIconProps;

	// this route has sub routes or not
	containsRouteChildren?: boolean;

    // user can declare own leading component or icon
	leadingComponent?: ReactElement<FSVGIconProps>
	leadingIcon?: FIconProps;

	// css style of actionIcon
	actionIconClassName?: string;
	actionIconStyle?: CSSProperties;

	// css style of leadingIcon
	leadingIconClassName?: string;
	leadingIconStyle?: CSSProperties;
}
