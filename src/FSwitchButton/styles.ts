import { style } from "typestyle";
import { FReturnColor } from "..";

export const FSwitchButtonDiv = (checked?: boolean, disabled?: boolean) =>
	style({
		alignItems: "center",
		backgroundColor: checked ? FReturnColor({ color: "Green" }) : undefined,
		border:
			"2px solid " +
			(checked ? "rgba(10, 10, 12, 0.08)" : FReturnColor({ color: "Grey" })),
		borderRadius: 24,
		boxSizing: "border-box",
		cursor: disabled ? "not-allowed" : "pointer",
		display: "flex",
		height: "24px",
		padding: "2px 4px",
		width: "48px",
		transition: "all 0.2s ease-in-out",
		$nest: {
			"&>svg": {
				transform: checked ? "translateX(18px)" : "translateX(0)",
			},
		},
	});
