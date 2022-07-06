import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { RefObject } from "react";
import { style } from "typestyle";
import { FOverrideStyle, FUseColor } from "..";
import { FTagInputFieldProps } from "./types";

export const FTagInputFieldContainer = (props: FTagInputFieldProps<any>) =>
	style({
		alignItems: props.flexColumn ? "normal" : "center",
		backgroundColor: FUseColor({
			colorName: "White",
		}),
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
		backgroundColor: FUseColor({
			colorName: "White",
		}),
		display: "flex",
		columnGap: "0.5rem",
		justifyContent: "space-between",
		alignItems: "center",
		width: "inherit",
		borderBottom:
			"0.125rem solid " +
			(isTriggered ? FUseColor({ colorName: "Main" }) : "transparent"),
	});

export const FTagInputFieldInputAreaDiv = (props: FTagInputFieldProps<any>) => {
	const greyColor = FUseColor({
		colorName: "Grey",
	});
	const blackColor = FUseColor({
		colorName: "Black",
	});
	const whiteColor = FUseColor({
		colorName: "White",
	});

	return style({
		backgroundColor: whiteColor,
		border: "none",
		caretColor: FUseColor({ colorName: "Main" }),
		color: props.inputValue ? blackColor : greyColor,
		font: FFontTypes.Large_Text(),
		outline: "none",
		overflow: "hidden",
		padding: 0,
		resize: "none",
		$nest: {
			"&::placeholder": {
				color: greyColor,
			},
		},
	});
};

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
) => {
	const greyColor = FUseColor({
		colorName: "Grey",
	});
	const redColor = FUseColor({
		colorName: "Red",
	});
	const blackColor = FUseColor({
		colorName: "Black",
	});

	return style({
		font: FFontTypes.Large_Text(),
		color: isNew || isSelected ? greyColor : isExisted ? redColor : blackColor,
		backgroundColor: "inherit",
		border: "none",
		width: "100%",
		cursor: "inherit",
		padding: 0,
		textAlign: "left",
		$nest: {
			"&:hover": {
				backgroundColor: FUseColor({ colorName: "Sub" }),
				color:
					isNew || isSelected
						? FOverrideStyle(greyColor)
						: isExisted
						? FOverrideStyle(redColor)
						: FUseColor({ colorName: "Main" }),
			},
		},
	});
};
