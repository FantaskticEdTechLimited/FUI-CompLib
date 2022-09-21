import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FTabs } from "../../FTabs";
import { FTabsPanel } from "../../FTabsPanel";
import { FText } from "../../FText";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";

export default {
	title: "FUI-Complib/lib/FTabsPanel",
	component: FTabsPanel,
	argTypes: {
		style: { control: { disable: true } },
		className: { control: { disable: true } },
		tabLeadingComponents: { control: { disable: true } },
		tabActionConmponents: { control: { disable: true } },
		tabButtonProps: { control: { disable: true } },
		children: { control: { disable: true } },
		onClick: { control: { disable: true } },
		renderCustomizedTabButton: { control: { disable: true } },
	},
} as ComponentMeta<typeof FTabsPanel>;

const Template: ComponentStory<typeof FTabsPanel> = (args) => (
	<FTabs>
		<FTabsPanel {...args} label="Panel 1">
			<FText font={FFontTypes.Large_Text()} children="FTabsPanel Sample 1" />
		</FTabsPanel>
		<FTabsPanel {...args} label="Panel 2">
			<FText font={FFontTypes.Large_Text()} children="FTabsPanel Sample 2" />
		</FTabsPanel>
	</FTabs>
);

export const Default = Template.bind({});
