import { PropsWithChildren } from "react";
import { FIconProps } from "@innoplus-studio/fui-iconlib";
import {
	FComponentsType,
	FComponentType,
	FOnClickFunction,
	FRWDMode,
	PropsWithCustomStyle,
} from "../global.types";
import { FScrollBarStyleProps } from "../FScrollBarStyle/types";

export type OverlayEnterSide = "left" | "right";

export interface CustomIconButtonProps {
	style?: PropsWithCustomStyle["style"];
	className?: string;
	onClick?: FOnClickFunction;
}

export type FRWDNavBarProps = PropsWithChildren<unknown> & {
	/**
	 * responsive mode of the side bar
	 */
	rwdMode: FRWDMode;
	/**
	 * which side the overlay comes from
	 */
	overlayEnterSide: OverlayEnterSide;
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
	containerStyle?: PropsWithCustomStyle["style"];
	/**
	 * classname of (hidden/normal) side bar container
	 */
	containerClassName?: PropsWithCustomStyle["className"];
	/**
	 * css style of side bar content div (children)
	 */
	contentDivStyle?: PropsWithCustomStyle["style"];
	/**
	 * classname of side bar content div (children)
	 */
	contentDivClassName?: PropsWithCustomStyle["className"];
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
	dividerStyle?: PropsWithCustomStyle["style"];
	/**
	 * classname of the divider
	 */
	dividerClassName?: PropsWithCustomStyle["className"];
	/**
	 * css style of the overlay
	 */
	overlayStyle?: PropsWithCustomStyle["style"];
	/**
	 * classname of the overlay
	 */
	overlayClassName?: PropsWithCustomStyle["className"];
	/**
	 * css style of top bar
	 */
	topBarStyle?: PropsWithCustomStyle["style"];
	/**
	 * classname of top bar
	 */
	topBarClassName?: PropsWithCustomStyle["className"];
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
};
