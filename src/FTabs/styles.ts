import { style } from "typestyle";

export const FTabsWrapper = (disabled: boolean) =>
	style({
		display: "flex",
		flexDirection: "column",
		height: "100%",
		width: "100%",
		rowGap: "1rem",
		cursor: disabled ? "not-allowed" : "auto",
		opacity: disabled ? 0.4 : 1,
	});

export const FTabsHeaderContainer = style({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
});

export const FTabsTabContainer = style({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	columnGap: "0.5rem",
	$nest: {
		"&>div": {
			padding: "0.75rem 1.5rem",
		},
	},
}); 
