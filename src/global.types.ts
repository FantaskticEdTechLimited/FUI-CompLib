export type Nullable<T> = T | null;

export type OnClickFunction = () => void;

export type OnSubmitFuncion<T> =
	| ((data: T) => void)
	| ((data: T) => Promise<void>);

export type OnDataCallbackFunction<T, C> = (
	data: T,
	callbackFunction: C
) => Promise<void>;

export type OnCallBackFuntion<C> = (callbackFunction: C) => Promise<void>;
