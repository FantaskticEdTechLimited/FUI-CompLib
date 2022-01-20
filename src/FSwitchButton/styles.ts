import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { FSwitchButtonProps } from "./types";

export const FSwitchButtonDiv = (props: FSwitchButtonProps, checked: boolean) =>
	style({
		alignItems: "center",
		backgroundColor: checked
			? FColorTypes.SECONDARY_GREEN
			: FColorTypes.PRIMARY_WHITE, 
		border:
			"0.075rem solid " +
			(checked ? "rgba(10, 10, 12, 0.08)" : FColorTypes.PRIMARY_LIGHT),
		borderRadius: "1.5rem",
		boxSizing: "border-box",
		cursor: props.disabled ? "not-allowed" : "pointer",
		display: "flex",
		height: "1.5rem",
		padding: "0.125rem 0.25rem",
		width: "3rem",
		transition: "all 0.2s ease-in-out",
		$nest: {
			"&>svg": {
				transform: checked ? "translateX(1.25rem)" : "translateX(0)",
			},
		},
	});
