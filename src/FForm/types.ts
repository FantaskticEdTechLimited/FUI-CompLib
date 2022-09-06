import { CSSProperties, ReactNode } from "react";
import { FBottomNavBarProps } from "../FBottomNavBar/types";
import { FOnClickFunction } from "../global.types";

export interface FFormProps {
	children: ReactNode;
	FBottomNavigationProps?: Partial<FBottomNavBarProps>;
	onClose?: FOnClickFunction;
	onSubmit?: FOnClickFunction;
	containerStyle?: CSSProperties;
	containerClassName?: string;
	contentContainerStyle?: CSSProperties;
	contentContainerClassName?: string;
}
