import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { RefObject } from "react";
import { style } from "typestyle";
import { FTheme } from "../FThemeContext/types";
import { FTagInputFieldProps } from "./types";

export const FTagInputFieldContainer = (props: FTagInputFieldProps<any>) =>
	style({
		alignItems: props.flexColumn ? "normal" : "center",
		backgroundColor: FColorTypes.PRIMARY_WHITE,
		columnGap:
			props.renderCustomizedTagComponents ||
			(props.selectedTags && props.selectedTags.length > 0)
				? "0.5rem"
				: 0,
		display: "flex",
		flexDirection: props.flexColumn ? "column" : "row",
		overflowX: props.flexColumn ? "hidden" : "auto",
		overflowY: props.flexColumn ? "auto" : "hidden",
		padding: "0.75rem",
		rowGap: props.flexColumn ? "0.5rem" : 0,
	});

export const FTagInputFieldTagsDisplayDiv = (column: boolean) =>
	style({
		display: "flex",
		flexWrap: column ? "wrap" : "nowrap",
		columnGap: "0.5rem",
		rowGap: "0.5rem",
	});

export const FTagInputFieldWrapper = style({
	display: "flex",
	flexDirection: "column",
	width: "fit-content",
});

export const FTagInputFieldInputContainer = (
	isTriggered: boolean,
	theme: FTheme
) =>
	style({
		backgroundColor: FColorTypes.PRIMARY_WHITE,
		display: "flex",
		columnGap: "0.5rem",
		justifyContent: "space-between",
		alignItems: "center",
		width: "inherit",
		borderBottom:
			"0.125rem solid " + (isTriggered ? theme.mainThemeColor : "transparent"),
	});

export const FTagInputFieldInputAreaDiv = (
	props: FTagInputFieldProps<any>,
	theme: FTheme
) =>
	style({
		backgroundColor: FColorTypes.PRIMARY_WHITE,
		border: "none",
		caretColor: theme.mainThemeColor,
		color: props.inputValue
			? FColorTypes.PRIMARY_BLACK
			: FColorTypes.PRIMARY_GREY,
		font: FFontTypes.Large_Text(),
		outline: "none",
		overflow: "hidden",
		padding: 0,
		resize: "none",
		$nest: {
			"&::placeholder": {
				color: FColorTypes.PRIMARY_GREY,
			},
		},
	});

export const FTagInputFieldDropdownContainer = (
	ref: RefObject<HTMLDivElement>
) =>
	style({
		position: "absolute",
		maxHeight: "20rem",
		width: ref.current ? ref.current.offsetWidth : 0,
		marginTop: ref.current ? ref.current.offsetHeight + 10 : 0,
	});

export const FTagInputFieldDropdownOptionDiv = (
	isSelected: boolean,
	isNew: boolean,
	isExisted: boolean,
	theme: FTheme
) =>
	style({
		font: FFontTypes.Large_Text(),
		color:
			isNew || isSelected
				? FColorTypes.PRIMARY_GREY
				: isExisted
				? FColorTypes.SECONDARY_RED
				: FColorTypes.PRIMARY_BLACK,
		backgroundColor: "inherit",
		border: "none",
		width: "100%",
		cursor: "inherit",
		padding: 0,
		textAlign: "left",
		$nest: {
			"&:hover": {
				backgroundColor: theme.subThemeColor,
				color:
					isNew || isSelected
						? FColorTypes.PRIMARY_GREY + " !important"
						: isExisted
						? FColorTypes.SECONDARY_RED + " !important"
						: theme.mainThemeColor,
			},
		},
	});
