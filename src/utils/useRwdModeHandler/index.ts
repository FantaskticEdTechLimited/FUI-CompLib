import { FRWDMode, FRwdSizeProps } from "../../global.types";
import { FUseScreenSize } from "../useScreenSize";

/**
 * Return the current device type based on the input width.
 */
export const FRwdModeHandler = (props?: FRwdSizeProps) => {
	const [width] = FUseScreenSize();
	const mobileWidth = props?.mobileWidth ?? 720;
	const desktopWidth = props?.desktopWidth ?? 1280;
	const rwdMode =
		width < mobileWidth
			? FRWDMode.MOBILE
			: width < desktopWidth
			? FRWDMode.TABLET
			: FRWDMode.FULL;
	return rwdMode;
};
