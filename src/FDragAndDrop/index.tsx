import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FDragAndDropProps } from "./types";
import FDnDItem from "./FDnDItem";
import React, { useEffect, useState } from "react";
import { FDnDIndicatorPosition } from "./FDnDItem/types";

/** `<FDragAndDrop />` is a Drag and Drop (**_DnD_**) component,
 * which can _DnD_ an item to rearrange the order of items in the data list.
 *
 * The _DnD_ action can also be disabled if `disableDndAction` is set as `true`.
 *
 * Props: `FDragAndDropProps`.
 *   */
export const FDragAndDrop = <T,>(props: FDragAndDropProps<T>) => {
	const {
		disabled = false,
		disableDndAction = false,
		isShowIndicator = true,
		indicatorTarget = "container",
		dndButtonPosition = "left",
		isShowDndButton = true,
		data: dataSource = [],
		onUpdateData,
		children,
	} = props;

	const [renderArray, setRenderArray] = useState<T[]>([]);
	const [hoveredIndicatorIndex, setHoveredIndicatorIndex] =
		useState<number>(-1);
	const [indicatorPosition, setIndicatorPosition] =
		useState<FDnDIndicatorPosition>();

	const params: Partial<FDragAndDropProps<T>> = {
		disabled: disabled,
		disableDndAction: disableDndAction,
		isShowIndicator,
		indicatorTarget: indicatorTarget,
		dndButtonPosition: dndButtonPosition,
		isShowDndButton,
		...props,
	};

	const handleDnDItemDrop = (
		dragTargetIndex: number,
		dropTargetIndex: number
	) => {
		let dataArray: T[] = dataSource,
			dragTargetCard: T | null = null;

		// Drag down case
		if (dragTargetIndex < dropTargetIndex) {
			for (let i = 0; i < dataArray.length; i++) {
				if (i === dragTargetIndex) dragTargetCard = dataArray[dragTargetIndex];
				if (i >= dragTargetIndex && i <= dropTargetIndex) {
					if (i === dropTargetIndex)
						dataArray[dropTargetIndex] = dragTargetCard!;
					else dataArray[i] = dataArray[i + 1];
				}
			}
		}
		// Drag up case
		else if (dragTargetIndex > dropTargetIndex) {
			for (let i = dataArray.length - 1; i >= 0; i--) {
				if (i === dragTargetIndex) dragTargetCard = dataArray[dragTargetIndex];
				if (i >= dropTargetIndex && i <= dragTargetIndex) {
					if (i === dropTargetIndex)
						dataArray[dropTargetIndex] = dragTargetCard!;
					else dataArray[i] = dataArray[i - 1];
				}
			}
		}
		dataArray = [...dataArray];
		setRenderArray(dataArray);
		setHoveredIndicatorIndex(-1);
	};

	/** For handling _DnD_ Card onDrop function */
	useEffect(() => {
		if (renderArray && renderArray.length > 0) {
			onUpdateData && onUpdateData(renderArray);
			setRenderArray([]);
		}
	}, [renderArray]);

	return (
		<DndProvider backend={HTML5Backend}>
			{dataSource.map((data, index) => {
				const itemId = (data as any).id ?? index;
				const _isShowIndicator =
					!disabled &&
					isShowIndicator &&
					index === hoveredIndicatorIndex &&
					indicatorPosition !== undefined;

				return (
					<FDnDItem
						{...params}
						key={itemId}
						id={itemId}
						index={index}
						disabled={disabled}
						children={children(data, disabled)}
						onChildrenDrop={handleDnDItemDrop}
						isShowIndicator={_isShowIndicator}
						indicatorTarget={indicatorTarget}
						indicatorPosition={indicatorPosition}
						renderIndicatorData={(index, pos) => {
							setHoveredIndicatorIndex(index);
							setIndicatorPosition(pos);
						}}
					/>
				);
			})}
		</DndProvider>
	);
};
