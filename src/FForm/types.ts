import { ReactNode } from "react";
import { FBottomNavBarProps } from "../FBottomNavBar/types";
import { OnClickFunction } from "../global.types";

export interface FFormProps {
	children: ReactNode;
	FBottomNavigationProps?: Partial<FBottomNavBarProps>;
	onClose?: OnClickFunction;
	onSubmit?: OnClickFunction;
}
