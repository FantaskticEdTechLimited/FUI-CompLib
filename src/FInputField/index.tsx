import React, { useState, useEffect, useRef } from "react";
import { FFontTypes } from "@innoplus-studio/fui-fontlib";
import { inputAreaDiv, inputFieldContainer, inputFieldDiv } from "./styles";
import { FInputFieldProps } from "./types";
import { FScrollBarStyle, FText, FReturnColor, FJoinClassNames } from "..";

/** `<FInputField />` is a component for `<input />` or `<textarea />`.
 *
 * Props: `FInputFieldProps`.
 */
export const FInputField = (props: FInputFieldProps) => {
	const {
		value = "",
		placeholder = "Input",
		disabled = false,
		multiline = false,
		autoFocus = false,
		wordCount,
		label,
		wordCountProps,
		labelProps,
		scrollBarProps,
		style,
		inputDivStyle,
		inputAreaStyle,
		className,
		inputDivClassName,
		inputAreaClassName,
		onInput,
	} = props;

	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const [isFilled, setIsFilled] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const mainThemeColor = FReturnColor({ color: "Main" });
	const blackColor = FReturnColor({ color: "Black" });
	const greyColor = FReturnColor({ color: "Grey" });
	const hasWordCount = wordCount! > 0;

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
			style={style}
			className={FJoinClassNames([
				inputFieldContainer(hasWordCount),
				className,
			])}
		>
			<div
				style={inputDivStyle}
				className={FJoinClassNames([
					inputFieldDiv(isTriggered, isFilled, disabled, multiline),
					inputDivClassName,
				])}
				onClick={() => {
					if (!disabled) setIsTriggered(true);
				}}
				onBlur={() => {
					setIsTriggered(false);
					if (value === undefined || value === "") setIsFilled(false);
					else setIsFilled(true);
				}}
			>
				{label && (
					<FText
						font={
							isTriggered || isFilled
								? FFontTypes.Text()
								: FFontTypes.Large_Text()
						}
						color={
							isTriggered ? mainThemeColor : isFilled ? blackColor : greyColor
						}
						{...labelProps}
					>
						{label}
					</FText>
				)}
				{multiline ? (
					<textarea
						style={inputAreaStyle}
						className={FJoinClassNames([
							inputAreaDiv(
								isTriggered || isFilled || label === undefined,
								multiline,
								disabled
							),
							inputAreaClassName,
							FScrollBarStyle({ ...scrollBarProps }),
						])}
						ref={textareaRef}
						maxLength={hasWordCount ? wordCount : undefined}
						value={value}
						placeholder={placeholder}
						onChange={(event) => {
							if (!disabled) {
								onInput && onInput(event.target.value);
								handleTextareaHeight();
								event.preventDefault();
							}
						}}
					/>
				) : (
					<input
						style={inputAreaStyle}
						className={FJoinClassNames([
							inputAreaDiv(
								isTriggered || isFilled || label === undefined,
								multiline,
								disabled
							),
							inputAreaClassName,
						])}
						type="text"
						ref={inputRef}
						maxLength={hasWordCount ? wordCount : undefined}
						value={value}
						placeholder={placeholder}
						onChange={(event) => {
							if (!disabled) {
								onInput && onInput(event.target.value);
							}
						}}
					/>
				)}
			</div>
			<FText
				font={FFontTypes.Text()}
				color={isTriggered ? mainThemeColor : isFilled ? blackColor : greyColor}
				style={{ textAlign: "right", ...wordCountProps?.style }}
				{...wordCountProps}
			>
				{hasWordCount && value ? `${value.length}/${wordCount}` : ""}
			</FText>
		</div>
	);
};
