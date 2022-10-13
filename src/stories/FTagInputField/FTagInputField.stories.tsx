import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { FTagInputField } from "../../FTagInputField";

export default {
	title: "FUI-Complib/COMPONENTS/FTagInputField",
	component: FTagInputField,
	argTypes: {
		data: { control: { disable: true } },
		selectedTags: { control: { disable: true } },
		customDropdown: { control: { disable: true } },
		customTagComponent: { control: { disable: true } },
		renderFilteredTagResult: { control: { disable: true } },
		onInput: { control: { disable: true } },
		onTagCreate: { control: { disable: true } },
		onTagDelete: { control: { disable: true } },
		tagProps: { control: { disable: true } },
		dropdownProps: { control: { disable: true } },
		clearIconProps: { control: { disable: true } },
		scrollBarProps: { control: { disable: true } },
		inputDivClassName: { control: { disable: true } },
		inputWrapperClassName: { control: { disable: true } },
		inputContainerClassName: { control: { disable: true } },
		tagsDisplayDivClassName: { control: { disable: true } },
		inputDivStyle: { control: { disable: true } },
		inputWrapperStyle: { control: { disable: true } },
		inputContainerStyle: { control: { disable: true } },
		tagsDisplayDivStyle: { control: { disable: true } },
		className: { control: { disable: true } },
		style: { control: { disable: true } },
	},
} as ComponentMeta<typeof FTagInputField>;

const Template: ComponentStory<typeof FTagInputField> = (args) => (
	<FTagInputField {...args} style={{ width: "300px" }} />
);

export const Example = Template.bind({});
