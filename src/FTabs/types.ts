import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib";
import { CSSProperties, ReactElement, ReactNode } from "react";
import { FButtonProps } from "../FButton/types";
import { FSVGIconProps } from "../FSVGIcon/types";
import { FOnClickFunction } from "../global.types";

export interface FTabPanelProps {
	label?: string;
	tabLeadingComponents?: (
		isSelected: boolean
	) => ReactElement<FIconProps | FSVGIconProps> | ReactNode;
	tabActionConmponents?: (
		isSelected: boolean
	) => ReactElement<FIconProps | FSVGIconProps> | ReactNode;
	children?: ReactNode;
	disabled?: boolean;
	onClick?: FOnClickFunction;
	// user design own tab independently
	renderCustomizedTabButton?: (
		isSelected: boolean,
		buttonProps: FButtonProps
	) => ReactNode;
	/**
	 * Properties (including style and className) of the tab button.
	 */
	tabButtonProps?: FButtonProps;

	// control rerender
	isRenderOnSelected?: boolean;
}

export interface FTabsProps {
	children?: ReactElement<FTabPanelProps> | Array<ReactElement<FTabPanelProps>>;
	disabled?: boolean;
	// leading components in the header
	leadingComponents?: ReactNode;
	// action components in the header
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

	/**
	 * Properties (including style and className) of the tab button.
	 */
	tabButtonProps?: FButtonProps;
}
