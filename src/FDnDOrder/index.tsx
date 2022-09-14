import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FDnDOrderProps } from "./types";
import update from "immutability-helper";
import FDnDCard from "./FDnDCard";
import React, { useEffect, useState } from "react";

export const FDnDOrder = <T extends unknown>(props: FDnDOrderProps<T>) => {
	const [renderArray, setRenderArray] = useState<T[]>([]);

	const handleDnDCardMove = (dragIndex: number, hoverIndex: number) => {
		const dragCard = props.data[dragIndex];
		props.onUpdateData(
			update(props.data, {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, dragCard],
				],
			})
		);
	};

	const handleDnDCardDrop = (dragIndex: number, hoverIndex: number) => {
		let result: T[] = props.data,
			dragTargetCard: T;
		dragTargetCard = result[dragIndex];
		result[dragIndex] = result[hoverIndex];
		result[hoverIndex] = dragTargetCard;
		setRenderArray(result);
	};

	useEffect(() => {
		if (renderArray && renderArray.length > 0) {
			props.onUpdateData(renderArray);
			setRenderArray([]);
		}
	}, [renderArray]);

	return (
		<DndProvider backend={HTML5Backend}>
			{props.data &&
				props.data.map((data, index) => (
					<FDnDCard
						key={(data as any).id ?? index}
						id={(data as any).id}
						index={index}
						enableHoverOnly={props.enableHoverOnly}
						component={props.renderData(data, index)}
						onChildrenMove={handleDnDCardMove}
						onChildrenDrop={handleDnDCardDrop}
					/>
				))}
		</DndProvider>
	);
};
