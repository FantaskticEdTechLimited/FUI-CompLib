import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FBottomNavBar } from "../../FBottomNavBar";
import { FBottomNavBarProps } from "../../FBottomNavBar/types";
import { action } from "@storybook/addon-actions";

export default {
	title: "FUI-Complib/COMPONENTS/FBottomNavBar",
	component: FBottomNavBar,
	argTypes: {
		style: { control: { disable: true } },
		className: { control: { disable: true } },
		actionButtonProps: { control: { disable: true } },
		leadingButtonProps: { control: { disable: true } },
		customChildren: { control: { disable: true } },
		onActionButtonClick: { control: { disable: true } },
		onLeadingButtonClick: { control: { disable: true } },
	},
} as ComponentMeta<typeof FBottomNavBar>;

const Template: ComponentStory<typeof FBottomNavBar> = (args) => (
	<FBottomNavBar {...args} />
);

export const Default = Template.bind({});

Default.args = {
	onLeadingButtonClick: action("This is Cancel button."),
	onActionButtonClick: action("This is Next button."),
} as FBottomNavBarProps;
