import { ReactNode } from "react";
import { StylesConfig, GroupBase } from "react-select";
import { FOnClickFunction, FOnSubmitFunction, NumericStringType } from "..";

export interface FInputSelectProps<T> {
	/** Options data. */
	options: T[];
	/** Input value. */
	value: T[] | T;
	/** Placeholder of the select. */
	placeholder?: ReactNode;
	/** If `true`, it can support multiple selected options. */
	isMulti?: boolean;
	/** Loading status for the select. */
	isLoading?: boolean;
	/** If `true`, the select is **NOT** able to use. */
	disabled?: boolean;
	/** If `true`, it will hide created option. */
	isDisableCreate?: boolean;
	/** If `false`, the select is **NOT** able to clear the input. */
	isClearable?: boolean;
	/** If `false`, the select is **NOT** able to search for options. */
	isSearchable?: boolean;
	/** Returns the option label as component. */
	getOptionLabel: (d: T) => ReactNode;
	/** Returns the option key value. */
	getOptionKey: (d: T) => NumericStringType;
	/** Clear action event of the input. */
	onClear?: FOnClickFunction;
	/** Removes selected options. It **only** works if `isMulti` is `true`. */
	onRemove?: FOnSubmitFunction<T>;
	/** Select action event of the options. */
	onSelect: FOnSubmitFunction<T>;
	/** Create options action event of the select. */
	onCreate?: FOnSubmitFunction<string>;
	/** Method that option can be compared with input. */
	onCompareInputValue: (data: T, value: string) => boolean;
	/** Class name of the select container. */
	containerClassName?: string;
	/** Class name of the select content container. */
	contentContainerClassName?: string;
	/** Class name of the dropdown menu container. */
	menuClassName?: string;
	/** Class name of the render component container. */
	componentClassName?: string;
	/** Class name of the clear icon. */
	clearIconClassName?: string;
	/** Style modifier methods (default type of `react-select`).
	 *
	 * Reference: https://react-select.com/styles
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
