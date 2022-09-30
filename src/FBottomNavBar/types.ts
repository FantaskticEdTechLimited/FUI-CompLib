import { CSSProperties, ReactNode } from "react";
import { FButtonProps } from "../FButton/types";
import { FOnClickFunction } from "../global.types";

export interface FBottomNavBarProps {
	/** If `true`, the action button is **NOT** allowed to use. */
	disableActionButton?: boolean;
	/** If `true`, the leading button is **NOT** allowed to use. */
	disableLeadingButton?: boolean;
	/** Label of the action button. */
	actionButtonLabel?: string;
	/** Label of the leading button. */
	leadingButtonLabel?: string;
	/** Click action event of the action button. */
	onActionButtonClick?: FOnClickFunction;
	/** Click action event of the leading button. */
	onLeadingButtonClick?: FOnClickFunction;
	/** Custom content of the bottom nav bar. */
	customChildren?: ReactNode;
	/** Properties with `style` and `className` fields of the action button.
	 *
	 * Default action button type is `'Primary'`. */
	actionButtonProps?: FButtonProps;
	/** Properties with `style` and `className` fields of the leading button.
	 *
	 * Default leading button type is `'Secondary'`. */
	leadingButtonProps?: FButtonProps;
	/** Class name of the bottom nav bar. */
	className?: string;
	/** Style of the bottom nav bar. */
	style?: CSSProperties;
}
