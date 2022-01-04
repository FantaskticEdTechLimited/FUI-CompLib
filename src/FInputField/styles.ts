import { style } from "typestyle";
import { FInputFieldProps } from "./types"; 
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";

export const FInputFieldContainer = (props: FInputFieldProps) =>
	style({
		backgroundColor: FColorTypes.PURE_WHITE,
		display: "flex",
		flexDirection: "column",
		rowGap: props.wordcount ? "0.25rem" : 0,
		width: "100%",
	});

export const FInputFieldDiv = (
	props: FInputFieldProps,
	isTriggered: boolean,
	isFilled: boolean
) =>
	style({
		borderRadius: "0.5rem",
		border:
			"0.1rem solid " +
			(isTriggered
				? FColorTypes.BRAND
				: isFilled
				? FColorTypes.BLACK
				: FColorTypes.LIGHT_GREY),
		boxSizing: "border-box",
		caretColor: FColorTypes.BRAND,
		cursor: props.disabled ? "not-allowed" : "text",
		display: "flex",
		flexDirection: "column",
		justifyContent: props.multiline ? undefined : "center",
		minHeight: props.multiline ? "7rem" : "3.5rem",
		padding: isTriggered || isFilled ? "0.25rem 0.75rem" : "0.75rem",
		transition: "all 0.2s ease-in-out",
	});

export const FInputFieldInputAreaDiv = (props: FInputFieldProps, state: boolean) =>
	style({
		backgroundColor: FColorTypes.PURE_WHITE,
		border: "none",
		color: FColorTypes.BLACK,
		display: state ? "block" : "none",
		font: props.multiline ? FFontTypes.Small_Title : FFontTypes.Large_Text,
		outline: "none",
		overflow: "hidden",
		padding: 0,
		resize: "none",
		width: "100%",
	});
