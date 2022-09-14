import { Key, ReactElement } from "react";
import { ConnectDropTarget, ConnectDragSource } from "react-dnd";
import { FOnSubmitFunction } from "../global.types";

export interface FDnDOrderProps<T> {
	// a list of data to be mapped
	data: Array<T>;
	// drag and drop action to update the data list
	onUpdateData: FOnSubmitFunction<T[]>;
	// render JSX Element children
	renderData: (data: T, index: number) => ReactElement;
	/**
	 * If not set, the DnD function will only return onDrop action, by default.
	 */
	enableHoverOnly?: boolean;
}

export interface FDnDOrderDataProps {
	key: Key;
	id?: string;
	index: number;
	onChildrenMove: (dragIndex: number, hoverIndex: number) => void;
	onChildrenDrop: (dragIndex: number, hoverIndex: number) => void;
}

export interface FDnDCardProps extends FDnDOrderDataProps {
	enableHoverOnly?: boolean;
	// the JSX Element children
	component: ReactElement;
	isDragging: boolean;
	connectDragSource: ConnectDragSource;
	connectDropTarget: ConnectDropTarget;
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
