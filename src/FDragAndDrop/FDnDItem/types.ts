import { ReactNode, CSSProperties } from "react";
import { ConnectDropTarget, ConnectDragSource } from "react-dnd";
import { FDnDIndicatorProps } from "../FDnDIndicator/types";

type FDnDOnChildrenMoveProps = (
	dragTargetIndex: number,
	dropTargetIndex: number
) => void;

type FDnDIndicatorDataReturnProps = (
	hoverTargetIndex: number,
	position: IndicatorPosition
) => void;

export type IndicatorPosition = "top" | "bottom" | undefined;

export interface FDnDItemProps {
	/** Unique id of the _DnD_ item. */
	id?: string;
	/** Index of the _DnD_ item. */
	index: number;
	/** If `true`, the _DnD_ action cannot be used.*/
	disabled?: boolean;
	/** Event for the `onDrop` function. */
	onChildrenDrop: FDnDOnChildrenMoveProps;
	/** For the JSX element component to be rendered. */
	component: ReactNode;
	isDragging: boolean;
	connectDragSource: ConnectDragSource;
	connectDropTarget: ConnectDropTarget;
	/** Class name of _DnD_ item. */
	className?: string;
	/** Style of _DnD_ item. */
	style?: CSSProperties;
	/** If `true`, the indicator will be shown to recognise the drop or hover target. */
	showIndicator?: boolean;
	/** Position of the indicator. */
	indicatorPosition?: IndicatorPosition;
	/** Returns the index of the hovered item and the indicator position. */
	renderIndicatorData?: FDnDIndicatorDataReturnProps;
	/** Properties of the indicator shown on top or bottom of the hovered item. */
	indicatorProps?: FDnDIndicatorProps;
}

export const FDnDItemTypes = {
	CARD: "card",
};

export interface FDnDItemDragObject {
	id: string;
	index: number;
}

export interface FDnDItemDropObject {
	id: string;
	index: number;
}

export interface FDnDItemInstance {
	getNode(): HTMLDivElement | null;
}
