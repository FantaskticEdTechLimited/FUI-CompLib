import * as styles from "./styles";
import React, { useState } from "react";
import { FText, FUseColor } from "..";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FButtonProps } from "./types";

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
			{props.leadingComponents}
			{props.customChildren ?? (
				<FText
					font={FFontTypes.Text()}
					color={
						type === "Primary"
							? FUseColor({ colorName: "White" })
							: type === "Outline" || type === "Secondary"
							? FUseColor({ colorName: "Main" })
							: FUseColor({ colorName: "Black" })
					}
					style={props.labelStyle && props.labelStyle(isHover)}
					className={props.labelClassName && props.labelClassName(isHover)}
					children={label}
					{...props.labelProps}
				/>
			)}
			{props.actionComponents}
		</div>
	);
};
