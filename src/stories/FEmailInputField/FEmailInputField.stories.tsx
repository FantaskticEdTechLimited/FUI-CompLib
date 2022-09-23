import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FEmailInputField } from "../../FEmailInputField";

export default {
	title: "FUI-Complib/COMPONENTS/FEmailInputField",
	component: FEmailInputField,
	argTypes: {
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
		inputAreaStyle: { control: { disable: true } },
		inputAreaClassName: { control: { disable: true } },
		containerClassName: { control: { disable: true } },
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
