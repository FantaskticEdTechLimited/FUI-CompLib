import React, { useState, useEffect, useRef } from "react";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import * as styles from "./styles";
import { FInputFieldProps } from "./types";
import { FScrollBarStyle, FText, FReturnColor } from "..";

/** `<FInputField />` is a component for `<input />` or `<textarea />`.
 *
 * Props: `FInputFieldProps`.
 */
export const FInputField = ({
	value = "",
	placeholder = "Input",
	disabled = false,
	multiline = false,
	autoFocus = false,
	...props
}: FInputFieldProps) => {
	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const [isFilled, setIsFilled] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const mainThemeColor = FReturnColor({ color: "Main" });
	const blackColor = FReturnColor({ color: "Black" });
	const greyColor = FReturnColor({ color: "Grey" });
	const hasWordCount = props.wordCount! > 0;

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

	useEffect(() => {
		if (autoFocus && !disabled) setIsTriggered(true);
		else setIsTriggered(false);
	}, [autoFocus, disabled]);

	return (
		<div
			style={props.style}
			className={styles.FInputFieldContainer() + " " + props.className}
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
					if (value === undefined || value === "") setIsFilled(false);
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
						color={() =>
							isTriggered ? mainThemeColor : isFilled ? blackColor : greyColor
						}
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
						maxLength={hasWordCount ? props.wordCount : undefined}
						value={value}
						placeholder={placeholder}
						onChange={(event) => {
							if (!disabled) {
								props.onInput && props.onInput(event.target.value);
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
						maxLength={hasWordCount ? props.wordCount : undefined}
						value={value}
						placeholder={placeholder}
						onChange={(event) => {
							if (!disabled) {
								props.onInput && props.onInput(event.target.value);
							}
						}}
					/>
				)}
			</div>
			<FText
				font={FFontTypes.Text()}
				color={() =>
					isTriggered ? mainThemeColor : isFilled ? blackColor : greyColor
				}
				style={() => ({ textAlign: "right", ...props.wordCountProps?.style })}
				{...props.wordCountProps}
			>
				{hasWordCount && value ? `${value.length}/${props.wordCount}` : ""}
			</FText>
		</div>
	);
};
