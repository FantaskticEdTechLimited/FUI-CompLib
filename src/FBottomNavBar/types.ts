import { CSSProperties, ReactNode } from "react";
import { FButtonProps } from "../FButton/types";
import { OnClickFunction } from "../global.types";

export interface FBottomNavBarProps {
	actionButtonLabel?: string;
	children?: ReactNode;
	disableActionButton?: boolean;
	disableLeadingButton?: boolean;
	leadingButtonLabel?: string;
	onActionButtonClick?: OnClickFunction;
	onLeadingButtonClick?: OnClickFunction;

	// css style of action button
	actionButtonClassName?: string;
	actionButtonStyle?: CSSProperties;
	actionButtonProps?: FButtonProps;

	// css style of leading button
	leadingButtonClassName?: string;
	leadingButtonStyle?: CSSProperties;
	leadingButtonProps?: FButtonProps;

	// css style of FBottomNavBar
	navBarClassName?: string;
	navBarStyle?: CSSProperties;
}
