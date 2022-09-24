import React, { useState, useEffect, useRef } from "react";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import * as styles from "./styles";
import { FInputFieldProps } from "./types";
import { FScrollBarStyle, FText, FUseColor } from "..";

/** `<FInputField />` is a component for `<input />` or `<textarea />`.
 *
 * Props: `FInputFieldProps`.
 */
export const FInputField = ({
	inputValue = "",
	placeholder = "Input",
	disabled = false,
	multiline = false,
	...props
}: FInputFieldProps) => {
	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const [isFilled, setIsFilled] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const mainThemeColor = FUseColor({ colorName: "Main" });
	const blackColor = FUseColor({ colorName: "Black" });
	const greyColor = FUseColor({ colorName: "Grey" });

	const param: Partial<FInputFieldProps> = {
		disabled: disabled,
		multiline: multiline,
		...props,
	};

	const handleTextareaHeight = () => {
		if (textareaRef && textareaRef.current) {
			textareaRef.current.style.height = "auto";
			const scrollHeight = textareaRef.current.scrollHeight;
			if (scrollHeight !== 0)
				textareaRef.current.style.height = scrollHeight + "px";
		}
	};

	useEffect(() => {
		if (isTriggered && inputRef.current) inputRef.current.focus();
		if (isTriggered && textareaRef.current) {
			textareaRef.current.focus();
			handleTextareaHeight();
		}
	}, [isTriggered]);

	return (
		<div
			style={props.containerStyle}
			className={
				styles.FInputFieldContainer(param) + " " + props.containerClassName
			}
		>
			<div
				style={props.inputDivStyle}
				className={
					styles.FInputFieldDiv(param, isTriggered, isFilled) +
					" " +
					props.inputDivClassName
				}
				onClick={() => {
					if (!disabled) setIsTriggered(true);
				}}
				onBlur={() => {
					setIsTriggered(false);
					if (inputValue === undefined || inputValue === "") setIsFilled(false);
					else setIsFilled(true);
				}}
			>
				{props.label && (
					<FText
						font={
							isTriggered || isFilled
								? FFontTypes.Text()
								: FFontTypes.Large_Text()
						}
						color={
							isTriggered ? mainThemeColor : isFilled ? blackColor : greyColor
						}
						style={props.labelStyle}
						className={props.labelClassName}
						{...props.labelProps}
					>
						{props.label}
					</FText>
				)}
				{multiline ? (
					<textarea
						style={props.inputAreaStyle}
						className={
							styles.FInputFieldInputAreaDiv(
								param,
								isTriggered || isFilled || props.label === undefined
							) +
							" " +
							props.inputAreaClassName +
							" " +
							FScrollBarStyle({ ...props.scrollBarProps })
						}
						ref={textareaRef}
						maxLength={props.wordCount ? props.wordCount : undefined}
						value={inputValue}
						placeholder={placeholder}
						onChange={(event) => {
							if (!disabled) {
								props.renderInputValue &&
									props.renderInputValue(event.target.value);
								handleTextareaHeight();
								event.preventDefault();
							}
						}}
					/>
				) : (
					<input
						style={props.inputAreaStyle}
						className={
							styles.FInputFieldInputAreaDiv(
								param,
								isTriggered || isFilled || props.label === undefined
							) +
							" " +
							props.inputAreaClassName
						}
						type="text"
						ref={inputRef}
						maxLength={props.wordCount ? props.wordCount : undefined}
						value={inputValue}
						placeholder={placeholder}
						onChange={(event) => {
							if (!disabled) {
								console.log(event.target.value);
								props.renderInputValue &&
									props.renderInputValue(event.target.value);
							}
						}}
					/>
				)}
			</div>
			<FText
				font={FFontTypes.Text()}
				color={isTriggered ? mainThemeColor : isFilled ? blackColor : greyColor}
				style={{ textAlign: "right", ...props.wordCountStyle }}
				className={props.wordCountClassName}
				{...props.wordCountProps}
			>
				{props.wordCount && props.wordCount > 0 && inputValue
					? `${inputValue.length}/${props.wordCount}`
					: ""}
			</FText>
		</div>
	);
};
