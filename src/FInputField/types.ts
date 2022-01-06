import { CSSProperties } from "react";
import { Nullable } from "../global.types";

export interface FInputFieldProps {
	defaultValue?: string;
	disabled?: boolean;
	label?: string;
	multiline?: boolean;
	renderValue?: (value: Nullable<string>) => void;
	value?: Nullable<string>;
	wordcount?: number;
	
	// css style of InputField container with wordcount container
	containerClassName?: string;
	containerStyle?: CSSProperties;

	// css style of InputField div with label
	inputDivClassName?: string;
	inputDivStyle?: CSSProperties;

	// css style of InputField input area only
	inputAreaClassName?: string;
	inputAreaStyle?: CSSProperties;

}
