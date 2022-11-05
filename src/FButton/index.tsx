import * as styles from "./styles";
import React, { useState } from "react";
import { FFontTypes } from "@innoplus-studio/fui-fontlib";
import { FButtonProps } from "./types";
import { FText } from "../FText";
import { FReturnColor } from "../utils/FReturnColor";

/** `<FButton />` is a customized `Button` component.
 *
 * The default type is `"Primary"`.
 *
 * Props: `FButtonProps`.
 *
 * */
export const FButton = ({
	label = "Label",
	type = "Primary",
	disabled = false,
	...props
}: FButtonProps) => {
	const [isHover, setIsHover] = useState<boolean>(false);
	const param: Partial<FButtonProps> = {
		label: label,
		type: type,
		disabled: disabled,
		...props,
	};
	const mainThemeColor = FReturnColor({ color: "Main" });
	const whiteColor = FReturnColor({ color: "White" });
	const blackColor = FReturnColor({ color: "Black" });
	const labelColor =
		!disabled && isHover
			? type === "Text"
				? mainThemeColor
				: whiteColor
			: type === "Primary"
			? whiteColor
			: type === "Outline" || type === "Secondary"
			? mainThemeColor
			: blackColor;

	return (
		<div
			style={props.style && props.style(isHover)}
			className={
				styles.FButtonContainer(param, isHover) +
				" " +
				(props.className && props.className(isHover))
			}
			onClick={() => (disabled ? undefined : props.onClick && props.onClick())}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			{props.leadingComponents && props.leadingComponents(isHover)}
			{props.customChildren ? (
				props.customChildren(isHover)
			) : (
				<FText
					font={FFontTypes.Text()}
					color={() => labelColor}
					children={label}
					{...(props.labelProps && props.labelProps(isHover))}
				/>
			)}
			{props.actionComponents && props.actionComponents(isHover)}
		</div>
	);
};
