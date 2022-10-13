import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FEmailInputField } from "../../FEmailInputField";

export default {
	title: "FUI-Complib/COMPONENTS/FEmailInputField",
	component: FEmailInputField,
	argTypes: {
		/** In real case, if disabled, the input value is still shown but no input is allowed. */
		value: { control: "text", if: { arg: "disabled", truthy: false } },
		onInput: { control: { disable: true } },
		onEnterPress: { control: { disable: true } },
		wrapperClassName: { control: { disable: true } },
		wrapperStyle: { control: { disable: true } },
		warningLabelProps: { control: { disable: true } },
		style: {
			defaultValue: { width: "300px" },
			control: { disable: true },
		},
		className: { control: { disable: true } },
		inputAreaStyle: { control: { disable: true } },
		inputAreaClassName: { control: { disable: true } },
		leadingComponent: { control: { disable: true } },
		actionComponent: { control: { disable: true } },
		emailIconClassName: { control: { disable: true } },
		emailIconStyle: { control: { disable: true } },
		emailIconProps: { control: { disable: true } },
	},
} as ComponentMeta<typeof FEmailInputField>;

const Template: ComponentStory<typeof FEmailInputField> = (args) => (
	<FEmailInputField {...args} />
);

export const Example = Template.bind({});
