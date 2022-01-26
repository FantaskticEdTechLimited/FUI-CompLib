import { forwardRef, useImperativeHandle, useRef } from "react";
import {
	DropTargetMonitor,
	DragSourceMonitor,
	DragSource,
	DropTarget,
	DropTargetConnector,
	DragSourceConnector,
} from "react-dnd";
import {
	FDnDCardDragObject,
	FDnDCardInstance,
	FDnDCardProps,
	ItemTypes,
} from "./types";
import { XYCoord } from "dnd-core";
import React from "react";

const FDnDCard = forwardRef<HTMLDivElement, FDnDCardProps>(function Card(
	{ component, isDragging, connectDragSource, connectDropTarget },
	ref
) {
	const elementRef = useRef(null);
	connectDragSource(elementRef);
	connectDropTarget(elementRef);

	const opacity = isDragging ? 0.4 : 1;

	useImperativeHandle<any, FDnDCardInstance>(ref, () => ({
		getNode: () => elementRef.current,
	}));

	return (
		<div ref={elementRef} style={{ opacity: opacity }}>
			{component}
		</div>
	);
});

export default DropTarget(
	ItemTypes.CARD,
	{
		hover(
			props: FDnDCardProps,
			monitor: DropTargetMonitor,
			component: FDnDCardInstance
		) {
			if (!component) {
				return null;
			}
			// node = HTML Div element from imperative API
			const node = component.getNode();
			if (!node) {
				return null;
			}

			const dragIndex = monitor.getItem<FDnDCardDragObject>().index;
			const hoverIndex = props.index;

			// Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return;
			}

			// Determine rectangle on screen
			const hoverBoundingRect = node.getBoundingClientRect();

			// Get vertical middle
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

			// Determine mouse position
			const clientOffset = monitor.getClientOffset();

			// Get pixels to the top
			const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

			// Only perform the move when the mouse has crossed half of the items height
			// When dragging downwards, only move when the cursor is below 50%
			// When dragging upwards, only move when the cursor is above 50%

			// Dragging downwards
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}

			// Dragging upwards
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}

			// Time to actually perform the action
			props.onChildrenMove(dragIndex, hoverIndex);

			// Note: we're mutating the monitor item here!
			// Generally it's better to avoid mutations,
			// but it's good here for the sake of performance
			// to avoid expensive index searches.
			monitor.getItem<FDnDCardDragObject>().index = hoverIndex;

			return
		},
	},
	(connect: DropTargetConnector) => ({
		connectDropTarget: connect.dropTarget(),
	})
)(
	DragSource(
		ItemTypes.CARD,
		{
			beginDrag: (props: FDnDCardProps) => ({
				id: props.id,
				index: props.index,
			}),
		},
		(connect: DragSourceConnector, monitor: DragSourceMonitor) => ({
			connectDragSource: connect.dragSource(),
			isDragging: monitor.isDragging(),
		})
	)(FDnDCard)
);
