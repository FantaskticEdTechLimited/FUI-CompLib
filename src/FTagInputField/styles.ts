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
				? "8px"
				: 0,
		display: "flex",
		flexDirection: props.flexColumn ? "column" : "row",
		overflowX: props.flexColumn ? "hidden" : "auto",
		overflowY: props.flexColumn ? "auto" : "hidden",
		padding: "12px",
		rowGap: props.flexColumn ? "8px" : 0,
	});

export const FTagInputFieldTagsDisplayDiv = (column: boolean) =>
	style({
		display: "flex",
		flexWrap: column ? "wrap" : "nowrap",
		columnGap: "8px",
		rowGap: "8px",
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
		columnGap: "8px",
		justifyContent: "space-between",
		alignItems: "center",
		width: "inherit",
		borderBottom:
			"2px solid " +
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
		maxHeight: "320px",
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
