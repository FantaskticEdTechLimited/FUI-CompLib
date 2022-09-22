import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { FScrollableContainer } from ".";
import { FText } from "../../FText";

export default {
	title: "FUI-Complib/lib/FScrollableContainer",
	component: FScrollableContainer,
} as ComponentMeta<typeof FScrollableContainer>;

const Template: ComponentStory<typeof FScrollableContainer> = (args) => (
	<FScrollableContainer {...args}>
		<FText
			font={FFontTypes.Large_Text()}
			style={{ width: args.horizontal ? "1200px" : "100%" }}
			children={`This paragraph is with FScrollBarStyle. This paragraph is with FScrollBarStyle. This paragraph is with FScrollBarStyle. This paragraph is with FScrollBarStyle. This paragraph is with FScrollBarStyle. This paragraph is with FScrollBarStyle. This paragraph is with FScrollBarStyle. This paragraph is with FScrollBarStyle. This paragraph is with FScrollBarStyle. This paragraph is with FScrollBarStyle. This paragraph is with FScrollBarStyle. This paragraph is with FScrollBarStyle. This paragraph is with FScrollBarStyle. This paragraph is with FScrollBarStyle. This paragraph is with FScrollBarStyle. This paragraph is with FScrollBarStyle. This paragraph is with FScrollBarStyle.`}
		/>
	</FScrollableContainer>
);

export const Default = Template.bind({});
