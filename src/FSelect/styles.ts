import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { style } from "typestyle";
import { FSelectContainerStyleProps, FSelectProps } from "./types";

export const FSelectWrapper = style({
	position: "relative",
	display: "flex",
	flexDirection: "column",
});

export const FSelectContainer = (
	stylesProps: FSelectContainerStyleProps<any>
) =>
	style({
		alignItems: "center",
		backgroundColor: FColorTypes.FPrimaryColors.WHITE,
		border:
			"0.125rem solid " +
			(stylesProps.isClicked
				? stylesProps.theme.mainThemeColor
				: stylesProps.selectedOptions
				? FColorTypes.FPrimaryColors.BLACK
				: FColorTypes.FPrimaryColors.BG_LIGHT),
		borderRadius: "0.25rem",
		boxSizing: "border-box",
		columnGap: "0.5rem",
		cursor: stylesProps.disabled ? "not-allowed" : "pointer",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		opacity: stylesProps.disabled ? 0.4 : 1,
		padding: "0.75rem",
		$nest: {
			"&:hover": {
				$nest: {
					"svg path": {
						stroke: FColorTypes.FPrimaryColors.BLACK,
					},
				},
			},
		},
	});

export const FSelectContentDiv = (props: FSelectProps<any>) =>
	style({
		display: "flex",
		flexDirection: "column",
		flex: 1,
		rowGap: props.showLabelOnly ? 0 : "0.25rem",
	});

export const FSelectSelectedOptionDiv = style({
	whiteSpace: "pre-wrap",
});

export const FSelectDropdownContainer = (
	ref: React.RefObject<HTMLDivElement>,
	isClicked: boolean
) =>
	style({
		position: "absolute",
		width: ref.current ? ref.current.offsetWidth : 0,
		maxHeight: "20rem",
		marginTop: ref.current ? ref.current.offsetHeight : 0,
		visibility: isClicked ? "visible" : "hidden",
		transition: "all 0.1s ease-in-out",
	});
