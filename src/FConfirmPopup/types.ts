import { FBottomNavBarProps } from "../FBottomNavBar/types";
import { FPopUpProps } from "../FPopUp/types";
import { FTextProps } from "../FText/types";
import { OnClickFunction } from "../global.types";

export interface ConfirmPopupProps extends FPopUpProps {
	title: string;
	subtitle?: string;
	isDisableBottomNavigation?: boolean;
	onLeadingButtonClick?: OnClickFunction;
	onActionButtonClick?: OnClickFunction;
	FBottomNavigationProps?: Partial<FBottomNavBarProps>;
	titleProps?: FTextProps;
	subtitleProps?: FTextProps;
}
