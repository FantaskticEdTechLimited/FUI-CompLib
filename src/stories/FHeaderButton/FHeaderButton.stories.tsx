import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { FHeaderButton } from "../../FHeaderButton";
import {
	FHeaderButtonProps,
	FHeaderButtonTypes,
} from "../../FHeaderButton/types";

export default {
	title: "FUI-Complib/COMPONENTS/FHeaderButton",
	component: FHeaderButton,
	argTypes: {
		type: { defaultValue: "Back" },
		size: { defaultValue: "large" },
		configRwdSize: { control: { disable: true } },
		children: { control: { disable: true } },
		style: { control: { disable: true } },
		className: { control: { disable: true } },
		iconStrokeWidth: { control: "number" },
		iconProps: { control: { disable: true } },
		onClick: { control: { disable: true } },
	},
} as ComponentMeta<typeof FHeaderButton>;

const Template: ComponentStory<typeof FHeaderButton> = (args) => (
	<FHeaderButton {...args} />
);

export const Example = Template.bind({});
export const Back_Button = Template.bind({});
export const Close_Button = Template.bind({});
export const More_Button = Template.bind({});

const buttonProps: (
	type: FHeaderButtonTypes,
	isDefault?: boolean
) => Partial<FHeaderButtonProps> = (
	type: FHeaderButtonTypes,
	isDefault?: boolean
) => ({
	type: type,
	onClick: action(`This is ${isDefault ? "default" : type} type button.`),
});

Example.args = {
	...buttonProps("Back", true),
} as FHeaderButtonProps;

Back_Button.args = {
	...buttonProps("Back"),
} as FHeaderButtonProps;

Close_Button.args = {
	...buttonProps("Close"),
} as FHeaderButtonProps;

More_Button.args = {
	...buttonProps("More"),
} as FHeaderButtonProps;
