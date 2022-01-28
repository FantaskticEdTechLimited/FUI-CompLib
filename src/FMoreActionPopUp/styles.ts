import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";

export const topicRowMoreActionPopupContainer = style({
	backgroundColor: FColorTypes.PRIMARY_DARK + "AB",
	height: "100%",
	width: "100%",
	top: 0,
	left: 0,
	position: "absolute",
	zIndex: 20,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

export const topicRowMoreActionPopupDiv = style({
	display: "flex",
	flexDirection: "column",
	rowGap: "1.5rem",
	justifyContent: "center",
	width: "25rem",
	boxSizing: "border-box",
	padding: "1.5rem",
	backgroundColor: FColorTypes.PRIMARY_WHITE,
	border: "0.063rem solid " + FColorTypes.PRIMARY_LIGHT,
	borderRadius: "0.5rem",
	position: "absolute",
});

export const topicRowMoreActionPopupTitleDiv = style({
	display: "flex",
	flexDirection: "column",
	rowGap: "0.25rem",
	width: "22rem",
});

export const topicRowMoreActionPopupContentDiv = style({
	display: "flex",
	flexDirection: "column",
	rowGap: "0.75rem",
	width: "100%",
});
