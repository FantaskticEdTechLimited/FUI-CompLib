import { style } from "typestyle";
import { FUseColor } from "..";
import { FTagProps } from "./types";

export const FTagContainer = (props: FTagProps<any>) =>
	style({
		alignItems: "center",
		backgroundColor: FUseColor({ colorName: "Sub" }),
		borderRadius: "2px",
		boxSizing: "border-box",
		columnGap: "4px",
		cursor: props.disabled ? "not-allowed" : props.onClick && "pointer",
		display: "flex",
		opacity: props.disabled ? 0.4 : 1,
		padding: "4px 8px",
		width: "fit-content",
	});

export const FTagLabel = style({
	flexGrow: 1,
});
