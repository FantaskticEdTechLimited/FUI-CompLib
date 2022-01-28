import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";

export const functionalPopupDiv = style({
	display: "flex",
	flexDirection: "column",
	rowGap: "1.5rem",
	justifyContent: "center",
	width: "23.75rem",
	boxSizing: "border-box",
	padding: "1.5rem",
	backgroundColor: FColorTypes.PRIMARY_WHITE,
	borderRadius: "0.5rem",
	position: "fixed",
	transition: "all 0.1s ease-in-out",
});

export const functionalPopupTitleDiv = style({
	display: "flex",
	flexDirection: "column",
	rowGap: "0.75rem",
});
