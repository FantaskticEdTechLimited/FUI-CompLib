import { style } from "typestyle";
import { defaultThemeProps } from "../global.types";

import { FTagProps } from "./types";

export const FTagContainer = (props: FTagProps<any>) =>
	style({
		alignItems: "center",
		backgroundColor: props.themeProps?.subTheme ?? defaultThemeProps.mainTheme,
		borderRadius: "0.125rem",
		boxSizing: "border-box",
		columnGap: "0.25rem",
		cursor: props.disabled ? "not-allowed" : props.onClick && "pointer",
		display: "flex",
		opacity: props.disabled ? 0.4 : 1,
		padding: "0.25rem 0.5rem",
		width: "fit-content",
	});

export const FTagLabel = style({
	flexGrow: 1,
});
