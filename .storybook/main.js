module.exports = {
	stories: ["../src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-controls",
		"@storybook/addon-actions",
		"@storybook/addon-interactions",
	],
	framework: "@storybook/react",
};
