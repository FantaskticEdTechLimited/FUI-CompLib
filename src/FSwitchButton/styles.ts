import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { FSwitchButtonProps } from "./types";

export const FSwitchButtonDiv = (props: FSwitchButtonProps) =>
	style({
		alignItems: "center",
		backgroundColor: props.checked
			? FColorTypes.GREEN
			: FColorTypes.PURE_WHITE,
		border:
			"0.075rem solid " +
			(props.checked ? FColorTypes.BLACK : FColorTypes.LIGHT_GREY),
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
				transform: props.checked
					? "translateX(1.25rem)"
					: "translateX(0)"
			},
		},
	});
	
