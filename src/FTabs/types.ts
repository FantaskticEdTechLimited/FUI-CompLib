import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib";
import { CSSProperties, ReactElement, ReactNode } from "react";
import { FButtonProps } from "../FButton/types";
import { FSVGIconProps } from "../FSVGIcon/types";
import { OnClickFunction } from "../global.types";

export interface FTabPanelProps {
	label?: string;
	leadingComponents?: (
		isSelected: boolean
	) => ReactElement<FIconProps | FSVGIconProps> | ReactNode;
	actionConmponents?: (
		isSelected: boolean
	) => ReactElement<FIconProps | FSVGIconProps> | ReactNode;
	children?: ReactNode;
	disabled?: boolean;
	onClick?: OnClickFunction;
	// user design own tab independently
	renderCustomizedTabButton?: (
		isSelected: boolean,
		buttonProps: FButtonProps
	) => ReactNode;
	tabButtonProps?: FButtonProps;

	// control rerender 
	isRenderOnSelected?: boolean
}

export interface FTabsProps {
	children?: ReactElement<FTabPanelProps> | Array<ReactElement<FTabPanelProps>>;
	disabled?: boolean;
	// leading components in the header container
	leadingComponents?: ReactNode;
	// action components in the header container
	actionComponents?: ReactNode;
	// user design own tab in general
	renderCustomizedTabButton?: (
		isSelected: boolean,
		buttonProps: FButtonProps
	) => ReactNode;

	// css style of FTabs wrapper
	wrapperClassName?: string;
	wrapperStyle?: CSSProperties;

	// css style of FTabs header container
	headerClassName?: string;
	headerStyle?: CSSProperties;

	// css style of FTabs tab container
	tabContainerClassName?: string;
	tabContainerStyle?: CSSProperties;

	// css style of FTabs tab
	tabButtonClassName?: string;
	tabButtonStyle?: CSSProperties;
	tabButtonProps?: FButtonProps;

}
