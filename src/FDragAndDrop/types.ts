import { ReactNode } from "react";
import { FDnDButtonProps } from "./FDnDButton/types";
import { FOnSubmitFunction, PropsWithCustomStyle } from "../global.types";

type FDnDIndicatorTarget = "container" | "contentContainer";

type FDnDButtonPosition = "left" | "right";

type FDnDReturnChildrenProps<T> = (data: T, disabled?: boolean) => JSX.Element;

export type ExtendedFDragAndDropProps = Omit<
	FDragAndDropProps<any>,
	"data" | "onUpdateData" | "children"
>;

export type FDragAndDropProps<T = unknown> = PropsWithCustomStyle & {
	/** If `true`, the _DnD_ component is **NOT** allowed to use.*/
	disabled?: boolean;
	/** If `true`, the _DnD_ action event is **NOT** allowed to use.*/
	disableDndAction?: boolean;
	/** If `true`, the indicator will be shown on the target chosen.
	 *
	 * It does **NOT** work if `disableDndAction` is `true`. */
	isShowIndicator?: boolean;
	/** The target that the indicator appears on.
	 *
	 * `container`: The indicator shows on the whole container including the _DnD_ button.
	 *
	 * `contentContainer`: The indicator **only** shows on
	 * the content container (**without** the _DnD_ button).
	 *
	 * It does **NOT** work if `disableDndAction` is `true`. */
	indicatorTarget?: FDnDIndicatorTarget;
	/** If `true`, the _DnD_ button will be shown for action.
	 *
	 * It does **NOT** work if `disableDndAction` is `true`. */
	isShowDndButton?: boolean;
	/** Position of the _DnD_ button.
	 *
	 * It does **NOT** work if `disableDndAction` is `true`. */
	dndButtonPosition?: FDnDButtonPosition;
	/** A list of data input to be mapped. */
	data: Array<T>;
	/** Updates the order of the items after _DnD_ actions.
	 *
	 * It does **NOT** work if `disableDndAction` is `true`. */
	onUpdateData?: FOnSubmitFunction<T[]>;
	/** Content of the _DnD_ component. */
	children: FDnDReturnChildrenProps<T>;
	/** Properties of the indicator. */
	indicatorProps?: PropsWithCustomStyle;
	/** Properties of the default _DnD_ button.
	 *
	 * It does **NOT** work if there is a custom _DnD_ button. */
	dndButtonProps?: FDnDButtonProps;
	/** Custom _DnD_ button. */
	customDnDButton?: ReactNode;
	/** Class name of the _DnD_ content container. */
	contentContainerClassName?: PropsWithCustomStyle["className"];
	/** Style of the _DnD_ content container. */
	contentContainerStyle?: PropsWithCustomStyle["style"];
};
