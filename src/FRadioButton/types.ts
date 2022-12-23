import {
	PropsWithCustomStyle,
	PropsWithOnClickFunction,
} from "../global.types";

export type FRadioButtonProps = PropsWithOnClickFunction &
	PropsWithCustomStyle & {
		/** If `true`, the radio button is checked. */
		checked?: boolean;
		/** If `true`, the radio button is **NOT** able to use. */
		disabled?: boolean;
		/** Background color of the radio button. */
		fillColor?: string;
		/** Stroke color of the radio button. */
		color?: string;
		/** Stroke width of the radio button. */
		strokeWidth?: number | string;
	};
