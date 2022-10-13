import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib";
import { CSSProperties, ReactElement, ReactNode } from "react";
import { FDropdownProps } from "../FDropdown/types";
import { FTextProps } from "../FText/types";
import { FComponentType, FOnClickFunction } from "../global.types";

export interface FSelectContainerStyleProps<T> {
	isClicked: boolean;
	disabled: boolean;
	selectedOptions: T | null;
}

export interface FSelectProps<T> {
	/** Options data. */
	options: T[];
	/** Select action event of the options. */
	onSelect: (data: T) => void;
	/** Options that are selected. */
	selectedOptions: T | null;
	/** If `true`, the select component is **NOT** able to use. */
	disabled?: boolean;
	/** Label at the header of the select component. */
	label?: string;
	/** If `true`, it will **only** show the label
	 * (_without `placeholder` or `selectedOptions`_).
	 */
	showLabelOnly?: boolean;
	/** Placeholder of the select component. */
	placeholder?: string;
	/** Clear action event of the select component. */
	onClear?: FOnClickFunction;
	/** Returns custom selected option. */
	customSelectedOption?: (data: T) => ReactNode;
	/** Returns custom option. */
	customOption?: (data: T) => ReactNode;
	/** Shows the selected option name **only**. */
	renderSelectedOptionNameOnly?: (data: T) => string;
	/** Shows the listed option name **only**. */
	renderOptionNameOnly?: (data: T) => string;
	/** Properties of the clear icon which **only** works when `onClear` is used. */
	clearIconProps?: FIconProps;
	/** Properties of the action icon, i.e. the dropdown arrow icon. */
	arrowIconProps?: FIconProps;
	/** Returns custom clear icon. */
	customClearIcon?: FComponentType;
	/** Returns custom dropdown arrow icon. */
	customArrowIcon?: FComponentType;
	/** Properties of the dropdown. */
	dropdownProps?: FDropdownProps<T>;
	/** Returns custom dropdown inside the dropdown wrapper,
	 * which mainly controls the position and visibility of the dropdown.
	 */
	customDropdown?: ReactElement<FDropdownProps<T>>;
	/** Properties of the label. */
	labelProps?: FTextProps;
	/** Properties of the selected option. */
	selectedOptionProps?: FTextProps;
	/** Class name of the select component wrapper (with _Dropdown_). */
	wrapperClassName?: string;
	/** Style of the select component wrapper (with _Dropdown_). */
	wrapperStyle?: CSSProperties;
	/** Class name of the select component container. */
	className?: string;
	/** Style of the select component container. */
	style?: CSSProperties;
	/** Class name of the select component content container. */
	contentContainerClassName?: string;
	/** Style of the select component content container. */
	contentContainerStyle?: CSSProperties;
	/** Class name of the dropdown wrapper
	 * which mainly controls the position and visibility of the dropdown.
	 *
	 * You can change the style of dropdown itself
	 * using `className` in `dropdownProps`.
	 */
	dropdownWrapperClassName?: string;
	/** Style of the dropdown wrapper
	 * which mainly controls the position and visibility of the dropdown.
	 *
	 * You can change the style of dropdown itself
	 * using `style` in `dropdownProps`.
	 */
	dropdownWrapperStyle?: CSSProperties;
}
