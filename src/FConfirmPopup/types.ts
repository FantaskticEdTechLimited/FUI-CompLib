import { FBottomNavBarProps } from "../FBottomNavBar/types";
import { FPopUpProps } from "../FPopUp/types";
import { FTextProps } from "../FText/types";
import { FOnClickFunction } from "../global.types";

export interface ConfirmPopUpProps extends FPopUpProps {
	title: string;
	subtitle?: string;
	isDisableBottomNavigation?: boolean;
	onLeadingButtonClick?: FOnClickFunction;
	onActionButtonClick?: FOnClickFunction;
	FBottomNavigationProps?: Partial<FBottomNavBarProps>;
	titleProps?: FTextProps;
	subtitleProps?: FTextProps;
}
