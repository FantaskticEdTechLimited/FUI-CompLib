import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { FSearchBar } from "../../FSearchBar";

export default {
	title: "FUI-Complib/COMPONENTS/FSearchBar",
	component: FSearchBar,
	argTypes: {
		onInput: { control: { disable: true } },
		className: { control: { disable: true } },
		style: { control: { disable: true } },
		inputClassName: { control: { disable: true } },
		inputStyle: { control: { disable: true } },
		clearIconProps: { control: { disable: true } },
		searchIconProps: { control: { disable: true } },
	},
} as ComponentMeta<typeof FSearchBar>;

const Template: ComponentStory<typeof FSearchBar> = (args) => (
	<FSearchBar {...args} style={{ width: "300px" }} />
);

export const Example = Template.bind({});
