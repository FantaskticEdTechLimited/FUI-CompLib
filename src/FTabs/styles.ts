import { style } from "typestyle";

export const FTabsWrapper = (disabled: boolean) =>
	style({
		display: "flex",
		flexDirection: "column",
		height: "100%",
		width: "100%",
		rowGap: "16px",
		cursor: disabled ? "not-allowed" : "auto",
		opacity: disabled ? 0.4 : 1,
	});

export const FTabsHeader = style({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
});

export const FTabsTabContainer = style({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	columnGap: "8px",
	flex: 1,
	$nest: {
		"&>div": {
			padding: "12px 24px",
		},
	},
});
