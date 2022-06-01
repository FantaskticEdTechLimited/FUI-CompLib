export type Nullable<T> = T | null;

export type OnClickFunction = () => void;

export type OnSubmitFunction<T> =
	| ((data: T) => void)
	| ((data: T) => Promise<void>);

export type OnDataCallbackFunction<T, C> = (
	data: T,
	callbackFunction: C
) => Promise<void>;

export type OnCallBackFuntion<C> = (callbackFunction: C) => Promise<void>;

/**
 * for different device types:
 *
 * Full = PC, Tablet = tablet/pad, Mobile = phone.
 */
export enum RWDMode {
	// Full means PC device
	FULL = "FULL",
	TABLET = "TABLET",
	MOBILE = "MOBILE",
}

/**
 * for responsive device based on provided width
 */
export interface RwdSizeProps {
	// under this mobileWidth, RWDMode = Mobile
	mobileWidth?: number;
	// over this desktopWidth, RWDMode = Desktop (FULL)
	desktopWidth?: number;
}
