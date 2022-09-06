import { CSSProperties, ReactNode } from "react";
import { FButtonProps } from "../FButton/types";
import { FOnClickFunction } from "../global.types";

// type ModifiedButtonStyle = Pick<FButtonProps, "style">;
// type ModifiedButtonClassName = Pick<FButtonProps, "className">;
// type ModifiedButtonProps = Omit<FButtonProps, "className">;

export interface FBottomNavBarProps {
	actionButtonLabel?: string;
	children?: ReactNode;
	disableActionButton?: boolean;
	disableLeadingButton?: boolean;
	leadingButtonLabel?: string;
	onActionButtonClick?: FOnClickFunction;
	onLeadingButtonClick?: FOnClickFunction;

	/**
	 * Properties (including style and className) of the action button.
	 */
	actionButtonProps?: FButtonProps;

	/**
	 * Properties (including style and className) of the leading button.
	 */
	leadingButtonProps?: FButtonProps;

	/**
	 * ClassName of the bottom nav bar.
	 */
	className?: string;
	/**
	 * Style of the bottom nav bar.
	 */
	style?: CSSProperties;
}
