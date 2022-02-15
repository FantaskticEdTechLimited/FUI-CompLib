import { FIconProps } from "@fantaskticedtechlimited/fui-iconlib";
import { CSSProperties, ReactElement, ReactNode } from "react";
import { FDropdownProps } from "../FDropdown/types";
import { FScrollBarProps } from "../FScrollBar/types";
import { FTagProps } from "../FTag/types"; 

export interface FDropdownHintLabelsProps {
	newTagHintLabel?: string;
	existedTagHintLabel?: string;
}

export interface FilteredTagResultProps {
	new?: boolean;
	existed?: boolean;
}

export interface FTagInputFieldProps<T> {
	// remove dropdown; no tags shown
	disableDropdown?: boolean;
	// remove filtered tags in a dropdown; show all tags
	disableFilteredTags?: boolean;

	disabled?: boolean;
	// container is vertical display or not
	flexColumn?: boolean;
	// tag data array to show all tags that can be selected
	tagData?: T[];
	// selected or existed tags
	selectedTags?: T[];
	placeholder?: string;
	// for tag input
	inputValue?: string;
	renderInputValue?: (v: string) => void;
	// user can design own hint labels (new tag, existed tag warning)
	tagHintLabels?: FDropdownHintLabelsProps;
	// render filtered tag result whether the tag is new or existed
	renderFilteredTagResult?: (result: FilteredTagResultProps) => void;

	tagProps?: FTagProps<T>;
	// user can design how to show existed or inputted tags
	renderCustomizedTagComponents?: ReactNode;
	// create tags after user input and press Enter
	onTagCreate?: (data: string) => void;
	// click tag delete icon to delete
	onTagDelete?: (data: T) => void;
	clearIconProps?: FIconProps;
	dropdownProps?: FDropdownProps<T>;
	// user can design how to show dropdown of tags
	renderCustomizedDropdownComponent?: ReactElement<FDropdownProps<T>>;

	// css style of FTagInputField container
	containerClassName?: string;
	containerStyle?: CSSProperties;

	// css style of FTagInputField container
	tagsDisplayDivClassName?: string;
	tagsDisplayDivStyle?: CSSProperties;

	// css style of FTagInputField input wrapper (with dropdown)
	inputWrapperClassName?: string;
	inputWrapperStyle?: CSSProperties;

	// css style of FTagInputField input container
	inputContainerClassName?: string;
	inputContainerStyle?: CSSProperties;

	// css style of FTagInputField input area
	inputAreaClassName?: string;
	inputAreaStyle?: CSSProperties;

	scrollBarProps?: FScrollBarProps; 
}
