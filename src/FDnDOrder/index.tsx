import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FDnDOrderProps } from "./types";
import update from "immutability-helper";
import FDnDCard from "./FDnDCard";
import React from "react";

export const FDnDOrder = <T extends unknown>(props: FDnDOrderProps<T>) => {
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

	return (
		<DndProvider backend={HTML5Backend}>
			{props.data &&
				props.data.map((data, index) => (
					<FDnDCard
						key={(data as any).id ?? index}
						id={(data as any).id}
						index={index}
						component={props.renderData(data, index)}
						onChildrenMove={handleDnDCardMove}
					/>
				))}
		</DndProvider>
	);
};
