import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { style } from "typestyle";
import { SpecifiedClassNames } from "./types";
import { FUseColor } from "..";

const ControlProps = {
	backgroundColor: "transparent",
	cursor: "pointer",
};

export const FCreateSelect_Container = style({
	width: "100%",
	font: FFontTypes.Large_Text(),
	$nest: {
		[SpecifiedClassNames.BEFORE_OPEN_MENU_CONTAINER]: ControlProps,
		[SpecifiedClassNames.AFTER_OPEN_MENU_CONTAINER]: ControlProps,
	},
});

export const FCreateSelect__Content_Container = style({
	$nest: {
		[SpecifiedClassNames.CONTENT_CONTAINER]: {
			display: "flex",
			flexFlow: "row wrap",
			columnGap: "0.5rem",
			rowGap: "0.5rem",
			padding: "0.5rem",
		},
	},
});

export const FCreateSelect_Menu_Wrapper = style({
	$nest: {
		[SpecifiedClassNames.MENU_WRAPPER]: {
			$nest: {
				[SpecifiedClassNames.MENU_LIST_CONTAINER]: {
					$nest: {
						div: {
							cursor: "pointer",
						},
					},
				},
			},
		},
	},
});

export const FCreateSelect__Component_Container = style({
	$nest: {
		[SpecifiedClassNames.RENDERED_COMPONENT_WRAPPER]: {
			backgroundColor: "transparent",
			boxShadow: "0 0 0.5rem rgba(75, 65, 245, 0.12)",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			columnGap: "0.5rem",
			padding: "0.75rem 0.5rem",
		},
		[SpecifiedClassNames.RENDERED_COMPONENT_CONTENT_CONTAINER]: {
			padding: 0,
			$nest: {
				div: {
					border: "none",
					padding: 0,
				},
			},
		},
	},
});

export const FCreateSelect__ClearIcon_Container = () => style({
	$nest: {
		[SpecifiedClassNames.CLEAR_ICON_WRAPPER]: {
			padding: 0,
			width: "1.5rem",
			height: "1.5rem",
			$nest: {
				"&:hover": {
					backgroundColor: "transparent",
				},
			},
		},
		[SpecifiedClassNames.CLEAR_ICON_SVG_CONTAINER]: {
			width: "1.5rem",
			height: "1.5rem",
			$nest: {
				"&:hover": {
					stroke: FUseColor({
						colorName: "Red",
					}),
				},
			},
		},
	},
});
