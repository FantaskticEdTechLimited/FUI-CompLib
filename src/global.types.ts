export type Nullable<T> = T | null;

export type FOnClickFunction = () => void;

export type FOnSubmitFunction<T> =
	| ((data: T) => void)
	| ((data: T) => Promise<void>);

export type FOnDataCallbackFunction<T, C> = (
	data: T,
	callbackFunction: C
) => Promise<void>;

export type FOnCallBackFuntion<C> = (callbackFunction: C) => Promise<void>;

/**
 * for different device types:
 *
 * Full = PC, Tablet = tablet/pad, Mobile = phone.
 */
export enum FRWDMode {
	// Full means PC device
	FULL = "FULL",
	TABLET = "TABLET",
	MOBILE = "MOBILE",
}

/**
 * for responsive device based on provided width
 */
export interface FRwdSizeProps {
	// under this mobileWidth, RWDMode = Mobile
	mobileWidth?: number;
	// over this desktopWidth, RWDMode = Desktop (FULL)
	desktopWidth?: number;
}
