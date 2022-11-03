import { FIconProps } from "@innoplus-studio/fui-iconlib";
import { CSSProperties } from "react";
import { FTextProps } from "../FText/types";
import { FComponentType, FOnSubmitFunction } from "../global.types";

export interface FTagProps<T> {
	/** If `true`, the tag is **NOT** be able to use. */
	disabled?: boolean;
	/** Label to show the tag text. */
	label?: string;
	/** Tag data. */
	tag: T;
	/** Click action event of the tag. */
	onClick?: FOnSubmitFunction<T>;
	/** Delete action event of the tag. It will remove the selected tag. */
	onDelete?: FOnSubmitFunction<T>;
	/** Custom leading component. */
	leadingComponent?: FComponentType;
	/** Custom action component instead of the default delete icon. */
	actionComponent?: FComponentType;
	/** Properties of the delete icon. */
	deleteIconProps?: FIconProps;
	/** Properties of the label. */
	labelProps?: FTextProps;
	/** Class name of the tag. */
	className?: string;
	/** Style of the tag. */
	style?: CSSProperties;
}
