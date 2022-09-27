import React, { forwardRef, useImperativeHandle, useRef } from "react";
import {
	DropTargetMonitor,
	DragSourceMonitor,
	DragSource,
	DropTarget,
	DropTargetConnector,
	DragSourceConnector,
} from "react-dnd";
import { FDnDIndicator } from "../FDnDIndicator";
import {
	FDnDItemProps,
	FDnDItemInstance,
	FDnDItemTypes,
	FDnDItemDropObject,
	FDnDItemDragObject,
} from "./types";

/** `<FDnDItem />` is to render component items from the data list. */
export const FDnDItem = forwardRef<HTMLDivElement, FDnDItemProps>(function Card(
	{
		component,
		connectDragSource,
		connectDropTarget,
		style,
		className,
		showIndicator,
		indicatorPosition,
		indicatorProps,
	},
	ref
) {
	const elementRef = useRef(null);
	connectDragSource(elementRef);
	connectDropTarget(elementRef);
	const isShowOnTop = showIndicator && indicatorPosition === "top";
	const isShowOnBottom = showIndicator && indicatorPosition === "bottom";

	useImperativeHandle<any, FDnDItemInstance>(ref, () => ({
		getNode: () => elementRef.current,
	}));

	return (
		<div
			ref={elementRef}
			style={{
				display: "flex",
				flexDirection: "column",
				...style,
			}}
			className={className}
		>
			{isShowOnTop && (
				<FDnDIndicator style={{ marginBottom: "2px" }} {...indicatorProps} />
			)}
			{component}
			{isShowOnBottom && (
				<FDnDIndicator style={{ marginTop: "2px" }} {...indicatorProps} />
			)}
		</div>
	);
});

export default DropTarget(
	FDnDItemTypes.CARD,
	{
		drop(
			props: FDnDItemProps,
			monitor: DropTargetMonitor,
			component: FDnDItemInstance
		) {
			if (!props.disabled) {
				if (!component) return null;

				const dragTargetIndex = monitor.getItem<FDnDItemDropObject>().index;
				const dropTargetIndex = props.index;

				if (dragTargetIndex === dropTargetIndex) return;

				// Time to actually perform the action
				props.onChildrenDrop(dragTargetIndex, dropTargetIndex);

				// Note: we're mutating the monitor item here!
				// Generally it's better to avoid mutations,
				// but it's good here for the sake of performance
				// to avoid expensive index searches.
				monitor.getItem<FDnDItemDropObject>().index = dropTargetIndex;

				return;
			} else return;
		},

		hover(props: FDnDItemProps, monitor: DropTargetMonitor) {
			if (!props.disabled) {
				const dragTargetIndex = monitor.getItem<FDnDItemDragObject>().index;
				const hoverTargetIndex = props.index;

				if (dragTargetIndex < hoverTargetIndex)
					props.renderIndicatorData &&
						props.renderIndicatorData(hoverTargetIndex, "bottom");
				else if (dragTargetIndex > hoverTargetIndex)
					props.renderIndicatorData &&
						props.renderIndicatorData(hoverTargetIndex, "top");
				else
					props.renderIndicatorData && props.renderIndicatorData(-1, undefined);
			} else return;
		},
	},
	(connect: DropTargetConnector) => ({
		connectDropTarget: connect.dropTarget(),
	})
)(
	DragSource(
		FDnDItemTypes.CARD,
		{
			beginDrag: (props: FDnDItemProps) => ({
				id: props.id,
				index: props.index,
			}),
			endDrag: (props: FDnDItemProps, monitor: DragSourceMonitor) => {
				if (!monitor.didDrop()) {
					props.renderIndicatorData && props.renderIndicatorData(-1, undefined);
				}
			},
		},
		(connect: DragSourceConnector, monitor: DragSourceMonitor) => ({
			connectDragSource: connect.dragSource(),
			isDragging: monitor.isDragging(),
		})
	)(FDnDItem)
);
