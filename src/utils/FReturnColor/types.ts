import { FColorNames } from "@innoplus-studio/fui-colorlib";

export interface FReturnColorProps {
	/** Normal color in _light_ mode. */
	color: FColorNames;
	/**
	 * This **optional** dark mode color is to change the **default** dark mode color.
	 *
	 * _**Caution: No effect on theme color**_.
	 * You should set _light_ and _dark_ mode of the theme color
	 * using `FTheme` at your root page, e.g. _App.tsx_, instead.
	 */
	darkModeColor?: string;
}
