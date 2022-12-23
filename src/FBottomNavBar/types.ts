import { PropsWithChildren } from "react";
import { FButtonProps } from "../FButton/types";
import {
	FOnClickFunction,
	PropsWithCustomStyle,
	PropsWithDivRef,
} from "../global.types";

type ButtonProps = Omit<FButtonProps, "onClick" | "label" | "disabled">;

export type FBottomNavBarProps = PropsWithChildren<unknown> &
	PropsWithCustomStyle &
	PropsWithDivRef & {
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
		/** Properties of the action button.
		 *
		 * Default action button type is `primary`. */
		actionButtonProps?: ButtonProps;
		/** Properties of the leading button.
		 *
		 * Default leading button type is `secondary`. */
		leadingButtonProps?: ButtonProps;
	};
