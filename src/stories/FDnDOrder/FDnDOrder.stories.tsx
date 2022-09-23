import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FDnDOrder } from "../../FDnDOrder";
import { FButton } from "../../FButton";

export default {
	title: "FUI-Complib/COMPONENTS/FDnDOrder",
	component: FDnDOrder,
	argTypes: {
		data: { control: { disable: true } },
		renderData: { control: { disable: true } },
		onUpdateData: { control: { disable: true } },
		style: { control: { disable: true } },
		className: { control: { disable: true } },
	},
} as ComponentMeta<typeof FDnDOrder>;

const Template: ComponentStory<typeof FDnDOrder> = (args) => {
	const [dataList, setDataList] = useState<string[]>([
		"Apple",
		"Banana",
		"Orange",
	]);

	return (
		<FDnDOrder
			{...args}
			data={dataList}
			renderData={(data, index) => {
				return <FButton key={index} type="Secondary" label={data} />;
			}}
			onUpdateData={setDataList}
			style={{ marginBottom: "8px", width: "100px" }}
		/>
	);
};

export const Example = Template.bind({});
