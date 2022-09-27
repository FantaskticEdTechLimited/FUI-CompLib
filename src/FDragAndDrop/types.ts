import { CSSProperties, ReactElement } from "react";
import { FDnDIndicatorProps } from "./FDnDIndicator/types";
import { FOnSubmitFunction } from "../global.types";

type FDnDDataReturnProps<T> = (data: T, index?: number) => ReactElement;

export interface FDragAndDropProps<T> {
	/** If `true`, the _DnD_ action cannot be used.*/
	disabled?: boolean;
	/** If `true`, the indicator will be shown to recognise the drop or hover target. */
	showIndicator?: boolean;
	/** A list of data input to be mapped. */
	data: Array<T>;
	/** Updates the order of the items after _DnD_ actions. */
	onUpdateData: FOnSubmitFunction<T[]>;
	/** Returns a list of items (JSX element) with the data input. */
	renderData: FDnDDataReturnProps<T>;
	/** Class name of _DnD_ item. */
	className?: string;
	/** Style of _DnD_ item. */
	style?: CSSProperties;
	/** Properties of the indicator shown on top or bottom of the hovered item. */
	indicatorProps?: FDnDIndicatorProps;
	/** Leading component of the _DnD_ item. */
	leadingComponents?: FDnDDataReturnProps<T>;
	/** Action component of the _DnD_ item. */
	actionComponents?: FDnDDataReturnProps<T>;
}
