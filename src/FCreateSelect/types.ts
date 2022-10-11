import { ReactNode } from "react";
import { StylesConfig, GroupBase } from "react-select";
import { FOnClickFunction, FOnSubmitFunction } from "..";

export interface FCreateSelectProps<T> {
	options: T[];
	value: T[] | T;
	placeholder?: ReactNode;
	/**
	 * Whether it can support multiple selected options or not.
	 */
	isMulti?: boolean;
	isLoading?: boolean;
	disabled?: boolean;
	/**
	 * It will make created option be hidden.
	 */
	isDisableCreate?: boolean;
	isClearable?: boolean;
	getOptionLabel: (d: T) => ReactNode;
	getOptionKey: (d: T) => string | number;
	onClear?: FOnClickFunction;
	/**
	 * It can only be used to remove selected options when multiple selected options is true.
	 */
	onRemove?: FOnSubmitFunction<T>;
	onSelect: FOnSubmitFunction<T>;
	onCreate?: FOnSubmitFunction<string>;
	/**
	 * Option can be compared with input.
	 */
	onCompareInputValue: (data: T, value: string) => boolean;

	// custom classNames / styles
	containerClassName?: string;
	contentContainerClassName?: string;
	menuClassName?: string;
	componentClassName?: string;
	clearIconClassName?: string;
	/**
	 * It is react-select styles: Style modifier methods.
	 */
	styles?: StylesConfig<T, boolean, GroupBase<T>> | undefined;
}

/**
 * Refer to react-select class names
 */
export enum SpecifiedClassNames {
	BEFORE_OPEN_MENU_CONTAINER = ".css-1s2u09g-control",
	AFTER_OPEN_MENU_CONTAINER = ".css-1pahdxg-control",
	CONTENT_CONTAINER = ".css-g1d714-ValueContainer",
	MENU_WRAPPER = ".css-26l3qy-menu",
	MENU_LIST_CONTAINER = ".css-4ljt47-MenuList",
	RENDERED_COMPONENT_WRAPPER = ".css-1rhbuit-multiValue",
	RENDERED_COMPONENT_CONTENT_CONTAINER = ".css-12jo7m5",
	CLEAR_ICON_WRAPPER = ".css-xb97g8",
	CLEAR_ICON_SVG_CONTAINER = ".css-tj5bde-Svg",
}
