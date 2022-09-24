import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FEmailInputField } from "../../FEmailInputField";

export default {
	title: "FUI-Complib/COMPONENTS/FEmailInputField",
	component: FEmailInputField,
	argTypes: {
		/** In real case, if disabled, the input value is still shown but no input is allowed. */
		inputValue: { control: "text", if: { arg: "disabled", truthy: false } },
		renderInputValue: { control: { disable: true } },
		onEnterPress: { control: { disable: true } },
		wrapperClassName: { control: { disable: true } },
		wrapperStyle: { control: { disable: true } },
		warninglabelClassName: { control: { disable: true } },
		warningLabelStyle: { control: { disable: true } },
		warningLabelProps: { control: { disable: true } },
		containerStyle: {
			defaultValue: { width: "300px" },
			control: { disable: true },
		},
		containerClassName: { control: { disable: true } },
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
