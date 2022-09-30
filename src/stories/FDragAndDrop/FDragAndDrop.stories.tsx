import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FDragAndDrop } from "../../FDragAndDrop";
import { FText } from "../../FText";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";

export default {
	title: "FUI-Complib/COMPONENTS/FDragAndDrop",
	component: FDragAndDrop,
	argTypes: {
		data: { control: { disable: true } },
		children: { control: { disable: true } },
		onUpdateData: { control: { disable: true } },
		style: { control: { disable: true } },
		className: { control: { disable: true } },
		contentContainerStyle: { control: { disable: true } },
		contentContainerClassName: { control: { disable: true } },
		indicatorProps: { control: { disable: true } },
		customDnDButton: { control: { disable: true } },
		dndButtonProps: { control: { disable: true } },
		indicatorTarget: { defaultValue: "container" },
		dndButtonPosition: { defaultValue: "left" },
	},
} as ComponentMeta<typeof FDragAndDrop>;

const Template: ComponentStory<typeof FDragAndDrop> = (args) => {
	const [dataList, setDataList] = useState<string[]>([
		"Apple",
		"Banana",
		"Orange",
	]);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				rowGap: "8px",
				width: "300px",
			}}
		>
			<FDragAndDrop
				{...args}
				data={dataList}
				onUpdateData={(data: string[]) => setDataList(data)}
				children={(data: string, index: number) => (
					<FText
						font={FFontTypes.Large_Text()}
						color={
							data === "Apple"
								? FColorTypes.FSecondaryColors.RED.LM
								: data === "Banana"
								? FColorTypes.FSecondaryColors.YELLOW.LM
								: FColorTypes.FSecondaryColors.ORANGE.LM
						}
						children={index + ". " + data}
					/>
				)}
			/>
		</div>
	);
};

export const Example = Template.bind({});
