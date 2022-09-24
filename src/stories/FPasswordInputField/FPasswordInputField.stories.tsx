import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FPasswordInputField } from "../../FPasswordInputField";

export default {
	title: "FUI-Complib/COMPONENTS/FPasswordInputField",
	component: FPasswordInputField,
	argTypes: {
		/** In real case, if disabled, the input value is still shown but no input is allowed. */
		inputValue: { control: "text", if: { arg: "disabled", truthy: false } },
		renderInputValue: { control: { disable: true } },
		onEnterPress: { control: { disable: true } },
		containerStyle: {
			defaultValue: { width: "300px" },
			control: { disable: true },
		},
		containerClassName: { control: { disable: true } },
		inputAreaStyle: { control: { disable: true } },
		inputAreaClassName: { control: { disable: true } },
		eyeIconProps: { control: { disable: true } },
		lockIconProps: { control: { disable: true } },
		eyeOffIconProps: { control: { disable: true } },
		leadingComponent: { control: { disable: true } },
	},
} as ComponentMeta<typeof FPasswordInputField>;

const Template: ComponentStory<typeof FPasswordInputField> = (args) => (
	<FPasswordInputField {...args} />
);

export const Example = Template.bind({});
