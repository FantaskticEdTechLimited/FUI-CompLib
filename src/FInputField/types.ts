import { CSSProperties } from "react";
import { Nullable } from "../global.types";

export interface FInputFieldProps {
	value: Nullable<string>;
	label: string;
	renderValue: (value: string) => void;
	// css style of InputField container with wordcount container
	containerClassName?: string;
	containerStyle?: CSSProperties;

	disabled?: boolean;
	// css style of InputField div with label
	inputDivClassName?: string;
	inputDivStyle?: CSSProperties;

	// css style of InputField input area only
	inputAreaClassName?: string;
	inputAreaStyle?: CSSProperties;
	
	multiline?: boolean;
	wordcount?: number;
}
