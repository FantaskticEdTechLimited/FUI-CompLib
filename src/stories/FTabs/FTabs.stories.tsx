import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FTabs } from "../../FTabs";
import { FTabsPanel } from "../../FTabsPanel";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FText } from "../../FText";

export default {
	title: "FUI-Complib/COMPONENTS/FTabs",
	component: FTabs,
	argTypes: {
		headerStyle: { control: { disable: true } },
		wrapperStyle: { control: { disable: true } },
		tabContainerStyle: { control: { disable: true } },
		headerClassName: { control: { disable: true } },
		wrapperClassName: { control: { disable: true } },
		tabContainerClassName: { control: { disable: true } },
		leadingComponents: { control: { disable: true } },
		actionComponents: { control: { disable: true } },
		tabButtonProps: { control: { disable: true } },
		customTabButton: { control: { disable: true } },
		children: { control: { disable: true } },
	},
} as ComponentMeta<typeof FTabs>;

const Template: ComponentStory<typeof FTabs> = (args) => (
	<FTabs {...args}>
		<FTabsPanel label="Tab1">
			<FText font={FFontTypes.Large_Text()} children="FTab Sample 1" />
		</FTabsPanel>
		<FTabsPanel label="Tab2">
			<FText font={FFontTypes.Large_Text()} children="FTab Sample 2" />
		</FTabsPanel>
		<FTabsPanel label="Tab3">
			<FText font={FFontTypes.Large_Text()} children="FTab Sample 3" />
		</FTabsPanel>
	</FTabs>
);

export const Example = Template.bind({});
