import { FUseColor } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { FCheckIsDarkMode } from "../..";
import { MoreActionItemProps } from "./types";

export const MoreActionItemnDiv = (props: MoreActionItemProps) =>
	style({
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		columnGap: "0.5rem",
		boxSizing: "border-box",
		padding: "0.75rem",
		border:
			"0.075rem solid " +
			FUseColor({
				colorName: "Grey",
				isDarkMode: FCheckIsDarkMode(),
			}),
		borderRadius: "0.25rem",
		cursor: "pointer",
		width: props.width ? props.width : "100%",
	});
