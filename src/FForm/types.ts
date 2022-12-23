import { PropsWithChildren } from "react";
import { FBottomNavBarProps } from "../FBottomNavBar/types";
import { FOnClickFunction, PropsWithCustomStyle } from "../global.types";

export type FFormProps = PropsWithChildren<unknown> &
	PropsWithCustomStyle & {
		/** Close action event of the form. */
		onClose?: FOnClickFunction;
		/** Submit input data action event of the form. */
		onSubmit?: FOnClickFunction;
		/** Style of the form content container. */
		contentContainerStyle?: PropsWithCustomStyle["style"];
		/** Class name of the form content container. */
		contentContainerClassName?: PropsWithCustomStyle["className"];
		/** Properties of the default bottom bar. */
		bottomBarProps?: FBottomNavBarProps;
	};
