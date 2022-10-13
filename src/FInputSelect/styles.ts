import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { style } from "typestyle";
import { SpecifiedClassNames } from "./types";
import { FReturnColor } from "..";

const ControlProps = {
	backgroundColor: "transparent",
	cursor: "pointer",
};

export const FInputSelect_Container = style({
	width: "100%",
	font: FFontTypes.Large_Text(),
	$nest: {
		[SpecifiedClassNames.BEFORE_OPEN_MENU_CONTAINER]: ControlProps,
		[SpecifiedClassNames.AFTER_OPEN_MENU_CONTAINER]: ControlProps,
	},
});

export const FInputSelect__Content_Container = style({
	$nest: {
		[SpecifiedClassNames.CONTENT_CONTAINER]: {
			display: "flex",
			flexFlow: "row wrap",
			columnGap: "8px",
			rowGap: "8px",
			padding: "8px",
		},
	},
});

export const FInputSelect_Menu_Wrapper = style({
	$nest: {
		[SpecifiedClassNames.MENU_WRAPPER]: {
			$nest: {
				[SpecifiedClassNames.MENU_LIST_CONTAINER]: {
					$nest: {
						div: { cursor: "pointer" },
					},
				},
			},
		},
	},
});

export const FInputSelect__Component_Container = style({
	$nest: {
		[SpecifiedClassNames.RENDERED_COMPONENT_WRAPPER]: {
			backgroundColor: "transparent",
			boxShadow: "0 0 8px rgba(75, 65, 245, 0.12)",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			columnGap: "8px",
			padding: "12px 8px",
		},
		[SpecifiedClassNames.RENDERED_COMPONENT_CONTENT_CONTAINER]: {
			padding: 0,
			$nest: {
				div: { border: "none", padding: 0 },
			},
		},
	},
});

export const FInputSelect__ClearIcon_Container = () =>
	style({
		$nest: {
			[SpecifiedClassNames.CLEAR_ICON_WRAPPER]: {
				padding: 0,
				width: "24px",
				height: "24px",
				$nest: {
					"&:hover": { backgroundColor: "transparent" },
				},
			},
			[SpecifiedClassNames.CLEAR_ICON_SVG_CONTAINER]: {
				width: "24px",
				height: "24px",
				$nest: {
					"&:hover": {
						stroke: FReturnColor({ color: "Red" }),
					},
				},
			},
		},
	});
