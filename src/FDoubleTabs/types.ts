import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib";
import { CSSProperties, ReactElement, ReactNode } from "react";
import { FButtonProps } from "../FButton/types";
import { FSVGIconProps } from "../FSVGIcon/types";

export interface FDoubleTabsPanelProps {
	label?: string;
	tabButtonLeadingComponents?: (
		isSelected: boolean
	) => ReactElement<FIconProps | FSVGIconProps> | ReactNode;
	tabButtonActionComponents?: (
		isSelected: boolean
	) => ReactElement<FIconProps | FSVGIconProps> | ReactNode;
	children?: ReactNode;
	disabled?: boolean;
	// user design own tab independently
	renderCustomizedTabButton?: (
		isSelected: boolean,
		tabButtonProps: FButtonProps
	) => ReactNode;
	/**
	 * Properties (including style and className) of the tab button.
	 */
	tabButtonProps?: FButtonProps;

	// control rerender
	isRenderOnSelected?: boolean;
}

// type ModifiedTabButtonClassName = Pick<FButtonProps, "className">;
// type ModifiedTabButtonProps = Omit<FButtonProps, "className">;

export interface FDoubleTabsProps {
	children?: Array<ReactElement<FDoubleTabsPanelProps>>;
	disabled?: boolean;
	// leading components in the header
	leadingComponents?: ReactNode;
	// action components in the header
	actionComponents?: ReactNode;
	// user design own tab in general
	renderCustomizedTabButton?: (
		isSelected: boolean,
		tabButtonProps: FButtonProps
	) => ReactNode;

	// css style of FDoubleTabs wrapper
	wrapperClassName?: string;
	wrapperStyle?: CSSProperties;

	// css style of FDoubleTabs header
	headerClassName?: string;
	headerStyle?: CSSProperties;

	// css style of FDoubleTabs tab container
	tabContainerClassName?: string;
	tabContainerStyle?: CSSProperties;

	/**
	 * Properties (including style and className) of the tab button.
	 */
	tabButtonProps?: FButtonProps;
}
