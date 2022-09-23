import { CSSProperties, Key, ReactElement, ReactNode } from "react";
import { ConnectDropTarget, ConnectDragSource } from "react-dnd";
import { FOnSubmitFunction } from "../global.types";

type FDnDOrderDataReturnProps<T> = (
	data: T,
	index?: number,
	isDragging?: boolean
) => ReactElement;

export interface FDnDOrderProps<T> {
	/** A list of data input to be mapped. */
	data: Array<T>;
	/** Updates the order of the items after _DnD_ actions. */
	onUpdateData: FOnSubmitFunction<T[]>;
	/** Returns a list of items (JSX element) with the data input. */
	renderData: FDnDOrderDataReturnProps<T>;
	/** If `true`, `onHover` function will only be enabled for _DnD_ event.
	 * Otherwise, it will only return `onDrop` function.
	 *
	 * `onHover`: There will be hover effect
	 * (including the own hover effect of the item) on the items,
	 * and data is also updating when dragging an item on another.
	 *
	 * `onDrop`: No hover effect (except the own hover effect of the item)
	 * and data will be updated after _DnD_ process. */
	enableHoverOnly?: boolean;
	/** Class name to change the style of _DnD_ container. */
	className?: string;
	/** Style to change the style of _DnD_ container. */
	style?: CSSProperties;
}

type FDnDOrderOnChildrenMoveProps = (
	dragIndex: number,
	hoverIndex: number
) => void;

export interface FDnDCardProps {
	key: Key;
	id?: string;
	index: number;
	onChildrenHover: FDnDOrderOnChildrenMoveProps;
	onChildrenDrop: FDnDOrderOnChildrenMoveProps;
	enableHoverOnly?: boolean;
	/** For the JSX element component to be rendered. */
	component: (isDragging?: boolean) => ReactNode;
	isDragging: boolean;
	connectDragSource: ConnectDragSource;
	connectDropTarget: ConnectDropTarget;
	/** Class name to change the style of _DnD_ container. */
	className?: string;
	/** Style to change the style of _DnD_ container. */
	style?: CSSProperties;
}

export const ItemTypes = {
	CARD: "card",
};

export interface FDnDCardDragObject {
	id: string;
	index: number;
}

export interface FDnDCardDropObject {
	id: string;
	index: number;
}

export interface FDnDCardInstance {
	getNode(): HTMLDivElement | null;
}
