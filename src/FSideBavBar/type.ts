import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib/lib/esm/FIcon/types";
import { CSSProperties, ReactNode } from "react";

export interface FSideNavBarProps {
	children: ReactNode;
	screenWidth: number;
	// control visibility of sideBar/topBar
	visible: boolean;
	// close menu icon attributes
	closeIconProps?: FIconProps
	// open menu icon attributes
	menuIconProps?: FIconProps

	// css style of side bar container
	containerClassName?: string;
	containerStyle?: CSSProperties;

	// css style of side bar content div (children)
	contentDivClassName?: string;
	contentDivStyle?: CSSProperties;

	// menu button is clicked and then close side bar when tablet / mobile mode
	forcedToClose?: boolean;
	// whether there is a logo on the nav bar
	logo?: ReactNode;
	
	// css style of overlay container
	overlayClassName?: string;
	overlayStyle?: CSSProperties;

	// css style and components of top nav bar
	topBarStyle?: CSSProperties;
	topBarClassName?: string;
	topBarLeadingComponents?: ReactNode[];
	topBarActionComponents?: ReactNode[];
}
