import { CSSProperties, ReactNode } from "react";
import { FButtonProps } from "../FButton/types";
import { FOnClickFunction } from "../global.types";

export interface FBottomNavBarProps {
	/** Custom content of the bottom nav bar. */
	customChildren?: ReactNode;
	/** If `true`, the action button cannot be used. */
	disableActionButton?: boolean;
	/** If `true`, the leading button cannot be used. */
	disableLeadingButton?: boolean;
	/** Label of the action button. */
	actionButtonLabel?: string;
	/** Label of the leading button. */
	leadingButtonLabel?: string;
	/** Click action event for the action button. */
	onActionButtonClick?: FOnClickFunction;
	/** Click action event for the leading button. */
	onLeadingButtonClick?: FOnClickFunction;
	/** Properties with `style` and `className` fields of the action button.
	 *
	 * Default action button type is `'Primary'`. */
	actionButtonProps?: FButtonProps;
	/** Properties with `style` and `className` fields of the leading button.
	 *
	 * Default leading button type is `'Secondary'`. */
	leadingButtonProps?: FButtonProps;
	/** Class name to change the style of the bottom nav bar. */
	className?: string;
	/** Style to change the style of the bottom nav bar. */
	style?: CSSProperties;
}
