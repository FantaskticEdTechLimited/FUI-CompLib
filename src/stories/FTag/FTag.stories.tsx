import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { FTag } from "../../FTag";

export default {
	title: "FUI-Complib/COMPONENTS/FTag",
	component: FTag,
	argTypes: {
		tag: { control: { disable: true } },
		actionComponent: { control: { disable: true } },
		leadingComponent: { control: { disable: true } },
		labelProps: { control: { disable: true } },
		deleteIconProps: { control: { disable: true } },
		onClick: { control: { disable: true } },
		onDelete: { control: { disable: true } },
		className: { control: { disable: true } },
		style: { control: { disable: true } },
	},
} as ComponentMeta<typeof FTag>;

const Template: ComponentStory<typeof FTag> = (args) => <FTag {...args} />;

export const Example = Template.bind({});
