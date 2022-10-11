import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { FBottomNavBar } from "../../FBottomNavBar";

export default {
	title: "FUI-Complib/COMPONENTS/FBottomNavBar",
	component: FBottomNavBar,
	argTypes: {
		style: { control: { disable: true } },
		className: { control: { disable: true } },
		actionButtonProps: { control: { disable: true } },
		leadingButtonProps: { control: { disable: true } },
		customChildren: { control: { disable: true } },
		onActionButtonClick: {
			defaultValue: action("This is Next button."),
			control: { disable: true },
		},
		onLeadingButtonClick: {
			defaultValue: action("This is Cancel button."),
			control: { disable: true },
		},
	},
} as ComponentMeta<typeof FBottomNavBar>;

const Template: ComponentStory<typeof FBottomNavBar> = (args) => (
	<FBottomNavBar {...args} />
);

export const Example = Template.bind({});
