import { PropsWithChildren } from "react";
import { ConnectDropTarget, ConnectDragSource } from "react-dnd";
import { PropsWithDivRef } from "../../global.types";
import { ExtendedFDragAndDropProps } from "../types";

type FDnDOnChildrenMoveProps = (
	dragTargetIndex: number,
	dropTargetIndex: number
) => void;

type FDnDReturnIndicatorDataProps = (
	hoverTargetIndex: number,
	position: FDnDIndicatorPosition
) => void;

export type FDnDIndicatorPosition = "top" | "bottom" | undefined;

export type FDnDItemProps = ExtendedFDragAndDropProps &
	PropsWithChildren<unknown> &
	PropsWithDivRef & {
		/** Unique id of the _DnD_ item. */
		id?: string;
		/** Index of the _DnD_ item. */
		index: number;
		/** Event for the `onDrop` function. */
		onChildrenDrop: FDnDOnChildrenMoveProps;
		/** Position of the indicator. */
		indicatorPosition?: FDnDIndicatorPosition;
		/** Returns the index of the hovered item and the indicator position. */
		renderIndicatorData?: FDnDReturnIndicatorDataProps;
		isDragging: boolean;
		connectDragSource: ConnectDragSource;
		connectDropTarget: ConnectDropTarget;
	};

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
	getDragItemNode(): HTMLDivElement | null;
	getHoverItemNode(): HTMLDivElement | null;
}
