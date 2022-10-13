import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FInputField } from "../../FInputField";

export default {
	title: "FUI-Complib/COMPONENTS/FInputField",
	component: FInputField,
	argTypes: {
		/** In real case, if disabled, the input value is still shown but no input is allowed. */
		value: { control: "text", if: { arg: "disabled", truthy: false } },
		onInput: { control: { disable: true } },
		style: {
			defaultValue: { width: "300px" },
			control: { disable: true },
		},
		className: { control: { disable: true } },
		inputAreaStyle: { control: { disable: true } },
		inputAreaClassName: { control: { disable: true } },
		inputDivClassName: { control: { disable: true } },
		inputDivStyle: { control: { disable: true } }, 
		labelProps: { control: { disable: true } }, 
		wordCountProps: { control: { disable: true } },
		scrollBarProps: { control: { disable: true } },
	},
} as ComponentMeta<typeof FInputField>;

const Template: ComponentStory<typeof FInputField> = (args) => (
	<FInputField {...args} />
);

export const Example = Template.bind({});
