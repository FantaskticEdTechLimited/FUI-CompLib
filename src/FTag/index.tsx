import { FTagProps } from "./types";
import { tagContainer } from "./styles";
import React from "react";
import { FText, FReturnColor, FJoinClassNames } from "..";
import { FFontTypes } from "@innoplus-studio/fui-fontlib";
import { FIcon, FIconNames } from "@innoplus-studio/fui-iconlib";

/**
 * `<FTag />` is a component to show a tag
 * with a default remove icon (_works with `onDelete`_).
 *
 * Props: `FTagProps`.
 */
export const FTag = <T,>(props: FTagProps<T>) => {
	const {
		style,
		className,
		disabled,
		deleteIconProps,
		onSubmit,
		onDelete,
		label,
		labelProps,
		leadingComponent,
		actionComponent,
		tag,
	} = props;
	const mainThemeColor = FReturnColor({ color: "Main" });

	return (
		<div
			style={style}
			className={FJoinClassNames([tagContainer(disabled), className])}
			onClick={() => (disabled ? undefined : onSubmit && onSubmit(tag))}
		>
			{leadingComponent}
			<FText
				font={FFontTypes.Text()}
				color={mainThemeColor}
				children={label}
				{...labelProps}
			/>
			{actionComponent ? (
				actionComponent
			) : onDelete ? (
				<FIcon
					size="small"
					name={FIconNames.CLOSE}
					color={() => mainThemeColor}
					onClick={() => (disabled ? undefined : onDelete && onDelete(tag))}
					{...deleteIconProps}
				/>
			) : null}
		</div>
	);
};
