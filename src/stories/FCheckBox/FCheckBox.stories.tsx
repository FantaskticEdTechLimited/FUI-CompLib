import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { FCheckBox } from "../../FCheckBox";

export default {
	title: "FUI-Complib/COMPONENTS/FCheckBox",
	component: FCheckBox,
	argTypes: {
		type: { defaultValue: "round" },
		style: { control: { disable: true } },
		className: { control: { disable: true } },
		onClick: {
			control: { disable: true },
		},
		strokeWidth: { control: "number" },
	},
} as ComponentMeta<typeof FCheckBox>;

const Template: ComponentStory<typeof FCheckBox> = (args) => {
	return (
		<FCheckBox
			{...args}
			onClick={action(
				`CheckBox is ${args.checked ? "Checked" : "unChecked"} .`
			)}
		/>
	);
};

export const Example = Template.bind({});
