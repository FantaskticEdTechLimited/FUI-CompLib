import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { defaultThemeProps } from "../global.types";
import { FLinkButtonProps } from "./types";

export const FLinkButtonContainer = (
	isSelected: boolean,
	props: FLinkButtonProps
) =>
	style({
		alignItems: "center",
		backgroundColor: isSelected
			? props.themeProps?.mainTheme ?? defaultThemeProps.mainTheme
			: FColorTypes.PRIMARY_WHITE,
		border: "none",
		borderRadius: "0.25rem",
		boxSizing: "border-box",
		columnGap: "0.5rem",
		cursor: props.disabled ? "not-allowed" : "pointer",
		display: "flex",
		flexDirection: "row",
		padding: "0.75rem 0.75rem",
		textDecoration: "none",
	});

export const FLinkButtonLabel = style({
	flexGrow: 1,
});
