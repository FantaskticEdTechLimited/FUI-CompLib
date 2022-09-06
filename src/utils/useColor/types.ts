import { FColorNames } from "@fantaskticedtechlimited/fui-colorlib";

export interface FUseColorProps {
	/**
	 * Color name is the normal color in light mode
	 */
	colorName: FColorNames;
	/**
	 * This dark mode color is for the change of the default dark mode color
	 *
	 * Caution: **No effect on theme color**. You should set theme color instead.
	 */
	darkModeColor?: string;
}
