import { useWindowSize } from "usehooks-ts";
import { FRWDMode } from "../../global.types";
import { FRWDSizeProps } from "./types";

/**
 * Returns current device type based on the input width.
 */
export const FReturnRWDMode = (props?: FRWDSizeProps) => {
	const { width } = useWindowSize();
	const mobileWidth = props?.mobileWidth ?? 720;
	const pcWidth = props?.pcWidth ?? 1280;
	const rwdMode =
		width < mobileWidth
			? FRWDMode.MOBILE
			: width < pcWidth
			? FRWDMode.TABLET
			: FRWDMode.PC;
	return rwdMode;
};
