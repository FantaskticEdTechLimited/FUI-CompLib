import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { FSwitchButtonProps } from "./types";

export const FSwitchButtonDiv = (props: FSwitchButtonProps, checked: boolean) =>
	style({
		alignItems: "center",
		backgroundColor: checked ? FColorTypes.SECONDARY_GREEN : undefined,
		border:
			"2px solid " +
			(checked ? "rgba(10, 10, 12, 0.08)" : FColorTypes.PRIMARY_GREY),
		borderRadius: 24,
		boxSizing: "border-box",
		cursor: props.disabled ? "not-allowed" : "pointer",
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
