import { style } from "typestyle";

export const FTabsContainer = (disabled: boolean) =>
	style({
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		columnGap: "0.5rem",
		width: "fit-content",
		cursor: disabled ? "not-allowed" : "auto",
		opacity: disabled ? 0.4 : 1,
		$nest: {
			"&>div": {
				padding: "0.75rem 1.5rem",
			},
		},
	});