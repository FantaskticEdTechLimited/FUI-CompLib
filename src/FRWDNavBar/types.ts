import { CSSProperties, ReactNode } from "react";
import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib";
import { FRWDMode } from "../global.types";
import { FScrollBarStyleProps } from "../FScrollBarStyle/types";

export type OverlayEnterSide = "left" | "right";

export interface FSideNavBarProps {
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
	logo?: ReactNode;
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
	topBarLeadingComponents?: ReactNode;
	/**
	 * action components of top nav bar
	 */
	topBarActionComponents?: ReactNode;
	/**
	 * properties of scroll bar
	 */
	scrollBarProps?: FScrollBarStyleProps;
}
