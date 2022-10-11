import { CSSProperties, ReactNode } from "react"; 
import { FBottomNavBarProps } from "../FBottomNavBar/types";
import { FOnClickFunction } from "../global.types";

export interface FFormProps {
	/** Content of the form. */
	children: ReactNode;
	/** Close action event of the form. */
	onClose?: FOnClickFunction;
	/** Submit input data action event of the form. */
	onSubmit?: FOnClickFunction;
	/** Style of the form container. */
	style?: CSSProperties;
	/** Class name of the form container. */
	className?: string;
	/** Style of the form content container. */
	contentContainerStyle?: CSSProperties;
	/** Class name of the form content container. */
	contentContainerClassName?: string;
	/** Properties of the default bottom bar. */
	bottomBarProps?: FBottomNavBarProps;
}
