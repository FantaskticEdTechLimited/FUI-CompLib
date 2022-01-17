import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { RefObject } from "react";
import { style } from "typestyle";
import { FTagInputFieldProps } from "./types";

export const FTagInputFieldContainer = (props: FTagInputFieldProps<any>) =>
	style({
		alignItems: props.flexColumn ? "normal" : "center",
		backgroundColor: FColorTypes.PURE_WHITE,
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

export const FTagInputFieldInputContainer = (isTriggered: boolean) =>
	style({
		backgroundColor: FColorTypes.PURE_WHITE,
		display: "flex",
		columnGap: "0.5rem",
		justifyContent: "space-between",
		alignItems: "center",
		width: "inherit",
		borderBottom:
			"0.125rem solid " + (isTriggered ? FColorTypes.BRAND : "transparent"),
	});

export const FTagInputFieldInputAreaDiv = (value: string) =>
	style({
		backgroundColor: FColorTypes.PURE_WHITE,
		border: "none",
		caretColor: FColorTypes.BRAND,
		color: value ? FColorTypes.BLACK : FColorTypes.GREY,
		font: FFontTypes.Large_Text,
		outline: "none",
		overflow: "hidden",
		padding: 0,
		resize: "none",
		$nest: {
			"&::placeholder": {
				color: FColorTypes.GREY,
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
	isExisted: boolean
) =>
	style({
		font: FFontTypes.Large_Text,
		color: isNew || isSelected
			? FColorTypes.GREY
			: isExisted
			? FColorTypes.RED
			: FColorTypes.BLACK,
		backgroundColor: "inherit",
		border: "none",
		width: "100%",
		cursor: "inherit",
		padding: 0,
		textAlign: "left",
		$nest: {
			"&:hover": {
				backgroundColor: FColorTypes.PURPLE_BG,
				color: isNew || isSelected
					? FColorTypes.GREY + " !important"
					: isExisted
					? FColorTypes.RED + " !important"
					: FColorTypes.BRAND,
			},
		},
	});
