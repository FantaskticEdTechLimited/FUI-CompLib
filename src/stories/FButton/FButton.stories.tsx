import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { FButton } from "../../FButton";
import { FButtonProps, FButtonTypes } from "../../FButton/types";

export default {
	title: "FUI-Complib/lib/FButton",
	component: FButton,
	argTypes: {
		type: { defaultValue: "Primary" },
		style: { control: { disable: true } },
		className: { control: { disable: true } },
		labelProps: { control: { disable: true } },
		labelStyle: { control: { disable: true } },
		labelClassName: { control: { disable: true } },
		customChildren: { control: { disable: true } },
		leadingComponents: { control: { disable: true } },
		actionComponents: { control: { disable: true } },
		onClick: { control: { disable: true } },
	},
} as ComponentMeta<typeof FButton>;

const Template: ComponentStory<typeof FButton> = (args) => (
	<FButton {...args} />
);

export const Default = Template.bind({});
export const Primary_Button = Template.bind({});
export const Secondary_Button = Template.bind({});
export const Outline_Button = Template.bind({});
export const Text_Button = Template.bind({});

const buttonProps: (
	type: FButtonTypes,
	isDefault?: boolean
) => Partial<FButtonProps> = (type: FButtonTypes, isDefault?: boolean) => ({
	label: isDefault ? undefined : `${type} Button`,
	type: type,
	style: () => ({ width: "100px" }),
	onClick: action(`This is ${isDefault ? "default" : type} type button.`),
});

Default.args = {
	...buttonProps("Primary", true),
} as FButtonProps;

Primary_Button.args = {
	...buttonProps("Primary"),
} as FButtonProps;

Secondary_Button.args = {
	...buttonProps("Secondary"),
} as FButtonProps;

Outline_Button.args = {
	...buttonProps("Outline"),
} as FButtonProps;

Text_Button.args = {
	...buttonProps("Text"),
} as FButtonProps;
