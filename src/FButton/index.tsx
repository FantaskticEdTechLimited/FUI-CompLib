import * as styles from "./styles";
import React, { useState } from "react";
import { FText, FUseColor } from "..";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FButtonProps, FButtonTypes } from "./types";

/**
 * Example of using inline style with hover state:
 *
 * `const buttonStyle = (hover?: boolean) => {`
 *
 * `	return {backgroundColor: hover ? "red" : "green"};`
 *
 * `};`
 *
 * `<FButton style={buttonStyle} />;`
 */

export const FButton = (props: FButtonProps) => {
	const [isHover, setIsHover] = useState<boolean>(false);

	return (
		<div
			style={props.style && props.style(isHover)}
			className={
				styles.FButtonContainer(props) +
				" " +
				(props.className && props.className(isHover))
			}
			onClick={() =>
				props.disabled ? undefined : props.onClick && props.onClick()
			}
			// Added hover effect for className and style
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			{props.leadingComponents}
			{props.customChildren ? (
				props.customChildren
			) : (
				<FText
					font={FFontTypes.Text()}
					color={
						props.type === FButtonTypes.PRIMARY
							? FUseColor({
									colorName: "White",
							  })
							: props.type === FButtonTypes.OUTLINE ||
							  props.type === FButtonTypes.SECONDARY
							? FUseColor({ colorName: "Main" })
							: FUseColor({
									colorName: "Black",
							  })
					}
					style={props.labelStyle && props.labelStyle(isHover)}
					className={props.labelClassName && props.labelClassName(isHover)}
					children={props.label ?? "Button_Text"}
					{...props.labelProps}
				/>
			)}
			{props.actionComponents}
		</div>
	);
};
