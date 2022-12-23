import {
	NumericStringType,
	PropsWithCustomStyle,
	PropsWithOnClickFunction,
} from "../../global.types";

export type FPasswordInputFieldIconProps = PropsWithCustomStyle &
	PropsWithOnClickFunction & {
		/** If `true`, the icon is **NOT** able to use. */
		disabled?: boolean;
		/** Stroke color of the icon. */
		strokeColor?: string;
		/** Stroke width of the icon. */
		strokeWidth?: NumericStringType;
	};
