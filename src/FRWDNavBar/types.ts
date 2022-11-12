import { CSSProperties, ReactNode } from "react";
import { FIconProps } from "@innoplus-studio/fui-iconlib";
import {
	FComponentsType,
	FComponentType,
	FOnClickFunction,
	FRWDMode,
} from "../global.types";
import { FScrollBarStyleProps } from "../FScrollBarStyle/types";

export type OverlayEnterSide = "left" | "right";

export interface CustomIconButtonProps {
	style?: CSSProperties;
	className?: string;
	onClick?: FOnClickFunction;
}

export interface FRWDNavBarProps {
	/**
	 * responsive mode of the side bar
	 */
	rwdMode: FRWDMode;
	/**
	 * which side the overlay comes from
	 */
	overlayEnterSide: OverlayEnterSide;
	/**
	 * main content of the side / top bar
	 */
	children: ReactNode;
	/**
	 * visibility of the side / top bar
	 */
	visible: boolean;
	/**
	 * properties of the close menu icon
	 */
	closeIconProps?: FIconProps;
	/**
	 * properties of the menu icon on the top bar
	 */
	menuIconProps?: FIconProps;
	/**
	 * css style of (hidden/normal) side bar container
	 */
	containerStyle?: CSSProperties;
	/**
	 * classname of (hidden/normal) side bar container
	 */
	containerClassName?: string;
	/**
	 * css style of side bar content div (children)
	 */
	contentDivStyle?: CSSProperties;
	/**
	 * classname of side bar content div (children)
	 */
	contentDivClassName?: string;
	/**
	 * menu button is clicked and then close side bar when tablet / mobile mode
	 */
	forcedToClose?: boolean;
	/**
	 * whether there is a logo on the side and top bar
	 */
	logo?: FComponentType;
	/**
	 * whether there is a need for a divider under the logo box on the side bar.
	 */
	needDivider?: boolean;
	/**
	 * css style of the divider
	 */
	dividerStyle?: CSSProperties;
	/**
	 * classname of the divider
	 */
	dividerClassName?: string;
	/**
	 * css style of the overlay
	 */
	overlayStyle?: CSSProperties;
	/**
	 * classname of the overlay
	 */
	overlayClassName?: string;
	/**
	 * css style of top bar
	 */
	topBarStyle?: CSSProperties;
	/**
	 * classname of top bar
	 */
	topBarClassName?: string;
	/**
	 * leading components of top nav bar
	 */
	topBarLeadingComponents?: FComponentType | FComponentsType;
	/**
	 * Custom menu icon button of top nav bar
	 */
	topBarCustomMenuIcon?: FComponentType;
	/**
	 * Props of custom menu icon button of top nav bar
	 */
	topBarCustomMenuIconProps?: CustomIconButtonProps;
	/**
	 * Custom close icon button of top nav bar
	 */
	topBarCustomCloseIcon?: FComponentType;
	/**
	 * Props of custom close icon button of top nav bar
	 */
	topBarCustomCloseIconProps?: CustomIconButtonProps;
	/**
	 * properties of scroll bar
	 */
	scrollBarProps?: FScrollBarStyleProps;
}
