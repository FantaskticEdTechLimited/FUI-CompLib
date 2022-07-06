import { FScreenSizeHandler } from "..";
import { RWDMode, RwdSizeProps } from "../../global.types";

/**
 * Return the current device type based on the input width.
 */
export const FRwdModeHandler = (props?: RwdSizeProps) => {
	const [width] = FScreenSizeHandler();
	const mobileWidth = props?.mobileWidth ?? 720;
	const desktopWidth = props?.desktopWidth ?? 1280;
	const rwdMode =
		width < mobileWidth
			? RWDMode.MOBILE
			: width < desktopWidth
			? RWDMode.TABLET
			: RWDMode.FULL;
	return rwdMode;
};