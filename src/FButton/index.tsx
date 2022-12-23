import React, { useRef } from "react";
import { FFontTypes } from "@innoplus-studio/fui-fontlib";
import { FButtonProps } from "./types";
import { FText } from "../FText";
import { FReturnColor } from "../utils/FReturnColor";
import { buttonContainer } from "./styles";
import { useHover } from "usehooks-ts";
import { FJoinClassNames } from "../utils/FJoinClassNames";

/** `<FButton />` is a customized `Button` component.
 *
 * The default type is `"Primary"`.
 *
 * Props: `FButtonProps`.
 *
 * */
export const FButton = (props: FButtonProps) => {
	const {
		buttonRef,
		disabled = false,
		type = "primary",
		label = "Label",
		style,
		className,
		labelProps,
		onClick,
		actionComponents,
		leadingComponents,
		children,
	} = props;
	const hoverRef = useRef(null);
	const isHover = useHover(hoverRef);
	const mainThemeColor = FReturnColor({ color: "Main" });
	const whiteColor = FReturnColor({ color: "White" });
	const blackColor = FReturnColor({ color: "Black" });
	const labelColor =
		!disabled && isHover
			? type === "text"
				? mainThemeColor
				: whiteColor
			: type === "primary"
			? whiteColor
			: type === "outline" || type === "secondary"
			? mainThemeColor
			: blackColor;

	return (
		<div
			ref={buttonRef ?? hoverRef}
			style={style}
			className={FJoinClassNames([
				buttonContainer(type, disabled, isHover),
				className,
			])}
			onClick={() => (disabled ? undefined : onClick && onClick())}
		>
			{leadingComponents}
			{children ? (
				children
			) : (
				<FText
					font={FFontTypes.Text()}
					color={labelColor}
					children={label}
					{...labelProps}
				/>
			)}
			{actionComponents}
		</div>
	);
};
