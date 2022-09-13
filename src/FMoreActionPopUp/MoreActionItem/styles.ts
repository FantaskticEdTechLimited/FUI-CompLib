import { style } from "typestyle";
import { FUseColor } from "../..";
import { MoreActionItemProps } from "./types";

export const MoreActionItemnDiv = (props: MoreActionItemProps) =>
	style({
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		columnGap: "8px",
		boxSizing: "border-box",
		padding: "12px",
		border:
			"1.2px solid " +
			FUseColor({
				colorName: "Grey",
			}),
		borderRadius: "4px",
		cursor: "pointer",
		width: props.width ? props.width : "100%",
	});
