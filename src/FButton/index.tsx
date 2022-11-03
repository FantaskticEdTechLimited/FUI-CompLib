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
					color={() =>
						!disabled && isHover
							? type === "Text"
								? FReturnColor({ color: "Main" })
								: FReturnColor({ color: "White" })
							: type === "Primary"
							? FReturnColor({ color: "White" })
							: type === "Outline" || type === "Secondary"
							? FReturnColor({ color: "Main" })
							: FReturnColor({ color: "Black" })
					}
					children={label}
					{...(props.labelProps && props.labelProps(isHover))}
				/>
			)}
			{props.actionComponents}
		</div>
	);
};
