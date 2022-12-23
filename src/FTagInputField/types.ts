import { FIconProps } from "@innoplus-studio/fui-iconlib";
import { ReactElement } from "react";
import { FDropdownProps } from "../FDropdown/types";
import { FScrollBarStyleProps } from "../FScrollBarStyle/types";
import { FTagProps } from "../FTag/types";
import { FComponentType, PropsWithCustomStyle } from "../global.types";

export interface FTagInputFieldTagHintLabelsProps {
	/** Hint label for new tags. */
	newTag?: string;
	/** Hint label for selected tags. */
	selectedTag?: string;
}

export type FTagInputFieldProps<T = unknown> = PropsWithCustomStyle & {
	/** If `true`, the dropdown will **NOT** be shown. */
	disableDropdown?: boolean;
	/** If `true`, the tags will **NOT** be filtered. */
	disableFilteredTags?: boolean;
	/** If `true`, the inputfield is **NOT** be able to use. */
	disabled?: boolean;
	/** If `true`, the tag display will be in vertical. */
	vertical?: boolean;
	/** Placeholder of the inputfield. */
	placeholder?: string;
	/** Tag input value. */
	value?: string;
	/** Tag data that tags can be selected. */
	data?: T[];
	/** Tags that are selected. */
	selectedTags?: T[];
	/** Returns the input value. */
	onInput?: (v: string) => void;
	/** Hint label for new and selected tags. */
	tagHintLabels?: FTagInputFieldTagHintLabelsProps;
	/** Returns the filtered tag which is new or not (i.e. _selected_). */
	renderFilteredTagResult?: (isNew: boolean) => void;
	/** Properties of the tag. */
	tagProps?: FTagProps<T>;
	/** Custom tag instead of the default one. */
	customTagComponent?: FComponentType;
	/** Create tag action event of the inputfield. */
	onTagCreate?: (data: string) => void;
	/** Delete tag action event of the inputfield. */
	onTagDelete?: (data: T) => void;
	/** Properties of the clear icon. */
	clearIconProps?: FIconProps;
	/** Properties of the default dropdown. */
	dropdownProps?: FDropdownProps<T>;
	/** Custom dropdown instead of the default one. */
	customDropdown?: ReactElement<FDropdownProps<T>>;
	/** Class name of the tags display div. */
	tagsDisplayDivClassName?: PropsWithCustomStyle["className"];
	/** Style of the tags display div. */
	tagsDisplayDivStyle?: PropsWithCustomStyle["style"];
	/** Class name of the input wrapper (_with inputfield and dropdown_). */
	inputWrapperClassName?: PropsWithCustomStyle["className"];
	/** Style of the input wrapper (_with inputfield and dropdown_). */
	inputWrapperStyle?: PropsWithCustomStyle["style"];
	/** Class name of the inputfield container (_with clear icon_). */
	inputContainerClassName?: PropsWithCustomStyle["className"];
	/** Style of the inputfield container (_with clear icon_). */
	inputContainerStyle?: PropsWithCustomStyle["style"];
	/** Class name of the input area div. */
	inputDivClassName?: PropsWithCustomStyle["className"];
	/** Style of the input area div. */
	inputDivStyle?: PropsWithCustomStyle["style"];
	/** Properties of the scroll bar. */
	scrollBarProps?: FScrollBarStyleProps;
};
