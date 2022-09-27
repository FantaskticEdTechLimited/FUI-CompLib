import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FDragAndDrop } from "../../FDragAndDrop";
import { FButton } from "../../FButton";

export default {
	title: "FUI-Complib/COMPONENTS/FDragAndDrop",
	component: FDragAndDrop,
	argTypes: {
		data: { control: { disable: true } },
		renderData: { control: { disable: true } },
		onUpdateData: { control: { disable: true } },
		style: { control: { disable: true } },
		className: { control: { disable: true } },
		indicatorProps: { control: { disable: true } },
		leadingComponents: { control: { disable: true } },
		actionComponents: { control: { disable: true } },
	},
} as ComponentMeta<typeof FDragAndDrop>;

const Template: ComponentStory<typeof FDragAndDrop> = (args) => {
	const [dataList, setDataList] = useState<string[]>([
		"Apple",
		"Banana",
		"Orange",
	]);

	return (
		<FDragAndDrop
			{...args}
			data={dataList}
			renderData={(data: string, index: number) => {
				return <FButton key={index} type="Outline" label={data} />;
			}}
			onUpdateData={(data: string[]) => setDataList(data)}
			style={{ marginBottom: "8px", width: "100px" }}
		/>
	);
};

export const Example = Template.bind({});
