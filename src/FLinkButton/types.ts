import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib"; 
import { FButtonProps } from "../FButton/types"; 


export interface FLinkButtonProps extends FButtonProps {
	pathLink?: string;
	pathIsSelected?: boolean;
	actionIcon?: FIconProps;
	leadingIcon?: FIconProps;
	// this route has sub routes or not
	containsRouteChildren?: boolean;
}
