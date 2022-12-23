import React, { forwardRef, useImperativeHandle, useRef } from "react";
import {
	DropTargetMonitor,
	DragSourceMonitor,
	DragSource,
	DropTarget,
	DropTargetConnector,
	DragSourceConnector,
} from "react-dnd";
import { useHover } from "usehooks-ts";
import { FJoinClassNames } from "../../utils/FJoinClassNames";
import { FDnDButton } from "../FDnDButton";
import { FDnDButtonProps } from "../FDnDButton/types";
import { FDnDIndicator } from "../FDnDIndicator";
import { defaultContainer, styles } from "./styles";
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
		isShowIndicator,
		indicatorTarget,
		indicatorPosition,
		indicatorProps,
		style,
		className,
		contentContainerStyle,
		contentContainerClassName,
		disabled,
		dndButtonPosition,
		dndButtonProps,
		customDnDButton,
		children,
		isShowDndButton,
		disableDndAction,
		ref: itemRef,
	},
	ref
) {
	const dragItemRef = useRef<HTMLDivElement>(null);
	const hoverItemRef = useRef<HTMLDivElement>(null);
	const isHover = useHover(hoverItemRef);
	const isTargetOnContainer = indicatorTarget === "container";
	const isLeftDnDButton = dndButtonPosition === "left";
	const isTopIndicator = indicatorPosition === "top";
	const isShowTopIndicatorOnContainer =
		isShowIndicator && isTargetOnContainer && isTopIndicator;
	const isShowTopIndicatorOnContent =
		isShowIndicator && !isTargetOnContainer && isTopIndicator;
	const isShowBottomIndicatorOnContainer =
		isShowIndicator && isTargetOnContainer && !isTopIndicator;
	const isShowBottomIndicatorOnContent =
		isShowIndicator && !isTargetOnContainer && !isTopIndicator;
	const isShowDnDButtonOnLeft =
		isShowDndButton && !disableDndAction && isLeftDnDButton;
	const isShowDnDButtonOnRight =
		isShowDndButton && !disableDndAction && !isLeftDnDButton;
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
		<div className={styles.withIndicatorContainer}>
			{isShowTopIndicatorOnContainer && TopIndicator}
			<div
				ref={itemRef ?? hoverItemRef}
				style={style}
				className={FJoinClassNames([
					defaultContainer(disabled, isTargetOnContainer, isHover),
					className,
				])}
			>
				{isShowDnDButtonOnLeft &&
					(customDnDButton ? (
						customDnDButton
					) : (
						<div ref={dragItemRef}>
							<FDnDButton {...FDndButtonProps} />
						</div>
					))}
				<div className={styles.withIndicatorContainer}>
					{isShowTopIndicatorOnContent && TopIndicator}
					<div
						style={contentContainerStyle}
						className={FJoinClassNames([
							styles.contentContainer,
							contentContainerClassName,
						])}
					>
						{children}
					</div>
					{isShowBottomIndicatorOnContent && BottomIndicator}
				</div>
				{isShowDnDButtonOnRight &&
					(customDnDButton ? (
						customDnDButton
					) : (
						<div ref={dragItemRef}>
							<FDnDButton {...FDndButtonProps} />
						</div>
					))}
			</div>
			{isShowBottomIndicatorOnContainer && BottomIndicator}
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
			const { disableDndAction, disabled, onChildrenDrop, index } = props;

			if (!disabled || !disableDndAction) {
				const dragTargetIndex = monitor.getItem<FDnDItemDropObject>().index;
				const dropTargetIndex = index;

				if (!component) return null;

				if (dragTargetIndex === dropTargetIndex) return;

				// Time to actually perform the action
				onChildrenDrop(dragTargetIndex, dropTargetIndex);

				// Note: we're mutating the monitor item here!
				// Generally it's better to avoid mutations,
				// but it's good here for the sake of performance
				// to avoid expensive index searches.
				monitor.getItem<FDnDItemDropObject>().index = dropTargetIndex;

				return;
			} else return;
		},

		hover(props: FDnDItemProps, monitor: DropTargetMonitor) {
			const { disableDndAction, disabled, renderIndicatorData, index } = props;

			if (!disabled || !disableDndAction) {
				const dragTargetIndex = monitor.getItem<FDnDItemDragObject>().index;
				const hoverTargetIndex = index;

				if (dragTargetIndex < hoverTargetIndex)
					renderIndicatorData &&
						renderIndicatorData(hoverTargetIndex, "bottom");
				else if (dragTargetIndex > hoverTargetIndex)
					renderIndicatorData && renderIndicatorData(hoverTargetIndex, "top");
				else renderIndicatorData && renderIndicatorData(-1, undefined);
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
				const { renderIndicatorData } = props;
				if (!monitor.didDrop()) {
					renderIndicatorData && renderIndicatorData(-1, undefined);
				}
			},
		},
		(connect: DragSourceConnector, monitor: DragSourceMonitor) => ({
			connectDragSource: connect.dragSource(),
			isDragging: monitor.isDragging(),
		})
	)(FDnDItem)
);
