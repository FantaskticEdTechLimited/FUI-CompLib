import { FUseColor } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { FCheckIsDarkMode } from "..";
import { FSwitchButtonProps } from "./types";

export const FSwitchButtonDiv = (props: FSwitchButtonProps, checked: boolean) =>
	style({
		alignItems: "center",
		backgroundColor: checked
			? FUseColor({
					colorName: "Green",
					isDarkMode: FCheckIsDarkMode(),
			  })
			: undefined,
		border:
			"2px solid " +
			(checked
				? "rgba(10, 10, 12, 0.08)"
				: FUseColor({
						colorName: "Grey",
						isDarkMode: FCheckIsDarkMode(),
				  })),
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
