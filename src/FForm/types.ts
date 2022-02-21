import { CSSProperties, ReactNode } from "react";
import { FBottomNavBarProps } from "../FBottomNavBar/types";
import { OnClickFunction } from "../global.types";

export interface FFormProps {
	containerStyle?: CSSProperties
	children: ReactNode;
	FBottomNavigationProps?: Partial<FBottomNavBarProps>;
	onClose?: OnClickFunction;
	onSubmit?: OnClickFunction;
}
