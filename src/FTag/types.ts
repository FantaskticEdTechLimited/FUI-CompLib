import { FIconProps } from "@innoplus-studio/fui-iconlib";
import { FTextProps } from "../FText/types";
import {
	FComponentType,
	FOnSubmitFunction,
	PropsWithCustomStyle,
} from "../global.types";

export type FTagProps<T = unknown> = PropsWithCustomStyle & {
	/** If `true`, the tag is **NOT** be able to use. */
	disabled?: boolean;
	/** Label to show the tag text. */
	label?: string;
	/** Tag data. */
	tag: T;
	/** Click/Submit action event of the tag. */
	onSubmit?: FOnSubmitFunction<T>;
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
};
