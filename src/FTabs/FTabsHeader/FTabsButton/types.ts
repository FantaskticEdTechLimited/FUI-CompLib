import { CSSProperties, ReactNode } from "react";
import { FTextProps } from "../../../FText/types";
import {
	PropsWithDivRef,
	PropsWithOnClickFunction,
} from "../../../global.types";

export type FTabsButtonRenderProps<T> = ({
	isSelected,
	isHover,
	tabsKey,
}: {
	isSelected: boolean;
	isHover: boolean;
	tabsKey: string;
}) => T;

export type FTabsButtonProps = PropsWithOnClickFunction &
	PropsWithDivRef & {
		/** Key value of the tabs button. */
		tabsKey: string;
		/** Label text of the tabs button. */
		label: string;
		/** If `true`, the tabs button is selected. */
		isSelected: boolean;
		/** Style of the tabs button. */
		style?: FTabsButtonRenderProps<CSSProperties>;
		/** Class name of the tabs button. */
		className?: FTabsButtonRenderProps<string>;
		/** Properties of the label. */
		labelProps?: FTabsButtonRenderProps<FTextProps>;
		/** Custom leading component of the tabs button. */
		leadingComponent?: FTabsButtonRenderProps<ReactNode>;
		/** Custom action component of the tabs button. */
		actionComponent?: FTabsButtonRenderProps<ReactNode>;
	};

export type ModifiedFTabsButtonProps = Omit<
	FTabsButtonProps,
	"tabsKey" | "label" | "isSelected" | "onClick"
>;
