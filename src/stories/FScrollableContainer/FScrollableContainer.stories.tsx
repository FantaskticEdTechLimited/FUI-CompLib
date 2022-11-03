import { FFontTypes } from "@innoplus-studio/fui-fontlib";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { FScrollableContainer } from "../../FScrollableContainer";
import { FText } from "../../FText";

export default {
	title: "FUI-Complib/COMPONENTS/FScrollableContainer",
	component: FScrollableContainer,
	argTypes: {
		children: { control: { disable: true } },
	},
} as ComponentMeta<typeof FScrollableContainer>;

const Template: ComponentStory<typeof FScrollableContainer> = (args) => {
	const horizontal = args.horizontal;

	return (
		<FScrollableContainer
			style={{
				width: horizontal ? "100%" : "500px",
				height: horizontal ? "120px" : "100px",
			}}
			{...args}
		>
			<FText
				font={FFontTypes.Large_Text()}
				style={() => ({ width: horizontal ? "1200px" : "100%" })}
				children={`This paragraph is testing with FScrollBarStyle(). This paragraph is testing with FScrollBarStyle(). This paragraph is testing with FScrollBarStyle(). This paragraph is testing with FScrollBarStyle(). This paragraph is testing with FScrollBarStyle(). This paragraph is testing with FScrollBarStyle(). This paragraph is testing with FScrollBarStyle(). This paragraph is testing with FScrollBarStyle(). This paragraph is testing with FScrollBarStyle(). This paragraph is testing with FScrollBarStyle(). This paragraph is testing with FScrollBarStyle(). This paragraph is testing with FScrollBarStyle(). This paragraph is testing with FScrollBarStyle(). This paragraph is testing with FScrollBarStyle(). This paragraph is testing with FScrollBarStyle(). This paragraph is testing with FScrollBarStyle(). This paragraph is testing with FScrollBarStyle().`}
			/>
		</FScrollableContainer>
	);
};

export const Example = Template.bind({});
