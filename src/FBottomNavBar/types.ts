import { CSSProperties, ReactNode } from "react";
import { OnClickFunction } from "../global.types";

export interface FBottomNavBarProps {
	actionButtonLabel: string;
	leadingButtonLabel: string;
	onActionButtonClick: OnClickFunction<void>;
	onLeadingButtonClick: OnClickFunction<void>;
	actionButtonClassName?: string;
	actionButtonStyle?: CSSProperties;
	children?: ReactNode;
	disableActionButton?: boolean;
	disableLeadingButton?: boolean;
	leadingButtonClassName?: string;
	leadingButtonStyle?: CSSProperties;
	navBarClassName?: string;
	navBarStyle?: CSSProperties;
}
