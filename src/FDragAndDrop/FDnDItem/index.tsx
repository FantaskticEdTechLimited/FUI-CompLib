import React, {
	forwardRef,
	useImperativeHandle,
	useRef,
	useState,
} from "react";
import {
	DropTargetMonitor,
	DragSourceMonitor,
	DragSource,
	DropTarget,
	DropTargetConnector,
	DragSourceConnector,
} from "react-dnd";
import { FDnDButton } from "../FDnDButton";
import { FDnDButtonProps } from "../FDnDButton/types";
import { FDnDIndicator } from "../FDnDIndicator";
import { FDnDItem_Default_Container, styles } from "./styles";
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
		connectDragSource,
		connectDropTarget,
		showIndicator,
		indicatorTarget,
		indicatorPosition,
		indicatorProps,
		index,
		style,
		className,
		contentContainerStyle,
		contentContainerClassName,
		disabled,
		dndButtonPosition,
		dndButtonProps,
		customDnDButton,
		children,
		showDndButton,
		disableDndAction,
	},
	ref
) {
	const dragItemRef = useRef<HTMLDivElement>(null);
	const hoverItemRef = useRef<HTMLDivElement>(null);
	const [isHover, setIsHover] = useState<boolean>(false);
	const isTargetOnContainer = indicatorTarget === "container";
	const isLeftDnDButton = dndButtonPosition === "left";
	const isTopIndicator = indicatorPosition === "top";
	const showTopIndicatorOnContainer =
		showIndicator && isTargetOnContainer && isTopIndicator;
	const showTopIndicatorOnContent =
		showIndicator && !isTargetOnContainer && isTopIndicator;
	const showBottomIndicatorOnContainer =
		showIndicator && isTargetOnContainer && !isTopIndicator;
	const showBottomIndicatorOnContent =
		showIndicator && !isTargetOnContainer && !isTopIndicator;
	const showDnDButtonOnLeft =
		showDndButton && !disableDndAction && isLeftDnDButton;
	const showDnDButtonOnRight =
		showDndButton && !disableDndAction && !isLeftDnDButton;
	const FDndButtonProps: FDnDButtonProps = {
		disabled: disabled,
		...dndButtonProps,
	};

	connectDragSource(dragItemRef);
	connectDropTarget(hoverItemRef);

	useImperativeHandle<any, FDnDItemInstance>(ref, () => ({
		getDragItemNode: () => dragItemRef.current,
		getHoverItemNode: () => hoverItemRef.current,
	}));

	const TopIndicator = (
		<FDnDIndicator
			style={{ width: hoverItemRef?.current?.offsetWidth }}
			{...indicatorProps}
		/>
	);

	const BottomIndicator = (
		<FDnDIndicator
			style={{ width: hoverItemRef?.current?.offsetWidth }}
			{...indicatorProps}
		/>
	);

	return (
		<div className={styles.FDnDItem_WithIndicator_Container}>
			{showTopIndicatorOnContainer && TopIndicator}
			<div
				ref={hoverItemRef}
				style={style && style(isHover, index)}
				className={
					FDnDItem_Default_Container(disabled, isTargetOnContainer, isHover) +
					" " +
					(className && className(isHover, index))
				}
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				{showDnDButtonOnLeft &&
					(customDnDButton ? (
						customDnDButton
					) : (
						<div ref={dragItemRef}>
							<FDnDButton {...FDndButtonProps} />
						</div>
					))}
				<div className={styles.FDnDItem_WithIndicator_Container}>
					{showTopIndicatorOnContent && TopIndicator}
					<div
						style={
							contentContainerStyle && contentContainerStyle(isHover, index)
						}
						className={
							styles.FDnDItem_ContentContainer +
							" " +
							(contentContainerClassName &&
								contentContainerClassName(isHover, index))
						}
					>
						{children}
					</div>
					{showBottomIndicatorOnContent && BottomIndicator}
				</div>
				{showDnDButtonOnRight &&
					(customDnDButton ? (
						customDnDButton
					) : (
						<div ref={dragItemRef}>
							<FDnDButton {...FDndButtonProps} />
						</div>
					))}
			</div>
			{showBottomIndicatorOnContainer && BottomIndicator}
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
			if (!props.disabled || !props.disableDndAction) {
				const dragTargetIndex = monitor.getItem<FDnDItemDropObject>().index;
				const dropTargetIndex = props.index;

				if (!component) return null;

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
			if (!props.disabled || !props.disableDndAction) {
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
