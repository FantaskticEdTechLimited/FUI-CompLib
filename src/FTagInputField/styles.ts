import { FFontTypes } from "@innoplus-studio/fui-fontlib";
import { RefObject } from "react";
import { style, stylesheet } from "typestyle";
import { FOverrideStyle, FReturnColor } from "..";
import { FTagInputFieldProps } from "./types";

export const styles = stylesheet({
	FTagInputFieldWrapper: {
		display: "flex",
		flexDirection: "column",
		width: "fit-content",
	},
});

export const FTagInputFieldWrapper = (props: FTagInputFieldProps<any>) =>
	style({
		alignItems: props.vertical ? "normal" : "center",
		backgroundColor: FReturnColor({ color: "White" }),
		columnGap:
			props.customTagComponent ||
			(props.selectedTags && props.selectedTags.length > 0)
				? "8px"
				: 0,
		display: "flex",
		flexDirection: props.vertical ? "column" : "row",
		overflowX: props.vertical ? "hidden" : "auto",
		overflowY: props.vertical ? "auto" : "hidden",
		padding: "12px",
		rowGap: props.vertical ? "8px" : 0,
	});

export const FTagInputFieldTagsDisplayDiv = (vertical?: boolean) =>
	style({
		display: "flex",
		flexWrap: vertical ? "wrap" : "nowrap",
		columnGap: "8px",
		rowGap: "8px",
	});

export const FTagInputFieldInputContainer = (isTriggered: boolean) =>
	style({
		backgroundColor: FReturnColor({
			color: "White",
		}),
		display: "flex",
		columnGap: "8px",
		justifyContent: "space-between",
		alignItems: "center",
		width: "inherit",
		borderBottom:
			"2px solid " +
			(isTriggered ? FReturnColor({ color: "Main" }) : "transparent"),
	});

export const FTagInputFieldInputDiv = (value?: string) => {
	return style({
		backgroundColor: FReturnColor({ color: "White" }),
		border: "none",
		caretColor: FReturnColor({ color: "Main" }),
		color: value
			? FReturnColor({ color: "Black" })
			: FReturnColor({ color: "Grey" }),
		font: FFontTypes.Large_Text(),
		outline: "none",
		overflow: "hidden",
		padding: 0,
		resize: "none",
		$nest: {
			"&::placeholder": { color: FReturnColor({ color: "Grey" }) },
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
	const greyColor = FReturnColor({ color: "Grey" });
	const redColor = FReturnColor({ color: "Red" });
	const blackColor = FReturnColor({ color: "Black" });

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
				backgroundColor: FReturnColor({ color: "Sub" }),
				color:
					isNew || isSelected
						? FOverrideStyle(greyColor)
						: isExisted
						? FOverrideStyle(redColor)
						: FReturnColor({ color: "Main" }),
			},
		},
	});
};
