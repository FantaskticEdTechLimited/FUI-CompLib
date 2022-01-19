import { CSSProperties } from "react";
import { FScrollBarProps } from "../FScrollBar/types";
import { FTextProps } from "../global.types";

export interface FInputFieldProps {
	disabled?: boolean;
	label?: string;
	placeholder?: string;
	multiline?: boolean;
	renderInputValue?: (data: string) => void;
	// input value cannot be null
	inputValue?: string;
	wordCount?: number;

	// css style of InputField container with wordcount container
	containerClassName?: string;
	containerStyle?: CSSProperties;

	// css style of InputField div with label
	inputDivClassName?: string;
	inputDivStyle?: CSSProperties;

	// css style of InputField input area only
	inputAreaClassName?: string;
	inputAreaStyle?: CSSProperties;

	// css style of label
	labelClassName?: string;
	labelStyle?: CSSProperties;
	labelProps?: FTextProps;

	// css style of wordCount
	wordCountClassName?: string;
	wordCountStyle?: CSSProperties;
	wordCountProps?: FTextProps;

	scrollBarProps?: FScrollBarProps;
}
