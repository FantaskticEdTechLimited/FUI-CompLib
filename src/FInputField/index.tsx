import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";

import * as styles from "./styles";
import { FInputFieldProps } from "./types";
import { FScrollBarStyle, FText, FUseTheme } from "..";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";

export const FInputField = (props: FInputFieldProps) => {
	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const [isFilled, setIsFilled] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const { theme } = FUseTheme();

	const handleTextareaHeight = () => {
		if (textareaRef && textareaRef.current) {
			textareaRef.current.style.height = "auto";
			const scrollHeight = textareaRef.current.scrollHeight;
			if (scrollHeight !== 0)
				textareaRef.current.style.height = scrollHeight + "px";
		}
	};

	useLayoutEffect(() => {
		if (props.inputValue && props.inputValue.length > 0) {
			handleTextareaHeight();
			setIsTriggered(true);
		}
	}, [props.inputValue]);

	useEffect(() => {
		if (isTriggered && inputRef.current) inputRef.current.focus();
		if (isTriggered && textareaRef.current) textareaRef.current.focus();
		handleTextareaHeight();
	}, [isTriggered]);

	return (
		<div
			style={props.containerStyle}
			className={
				styles.FInputFieldContainer(props) + " " + props.containerClassName
			}
		>
			<div
				style={props.inputDivStyle}
				className={
					styles.FInputFieldDiv(props, isTriggered, isFilled, theme) +
					" " +
					props.inputDivClassName
				}
				onClick={() => {
					if (!props.disabled) setIsTriggered(true);
				}}
				onBlur={() => {
					setIsTriggered(false);
					if (props.inputValue === undefined || props.inputValue === "")
						setIsFilled(false);
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
							isTriggered
								? theme.mainThemeColor
								: isFilled
								? FColorTypes.PRIMARY_BLACK
								: FColorTypes.PRIMARY_GREY
						}
						style={props.labelStyle}
						className={props.labelClassName}
						{...props.labelProps}
					>
						{props.label}
					</FText>
				)}
				{props.multiline ? (
					<textarea
						style={props.inputAreaStyle}
						className={
							styles.FInputFieldInputAreaDiv(
								props,
								isTriggered || isFilled || props.label === undefined
							) +
							" " +
							props.inputAreaClassName +
							" " +
							FScrollBarStyle({
								...props.scrollBarProps,
							})
						}
						ref={textareaRef}
						maxLength={props.wordCount ? props.wordCount : undefined}
						value={props.inputValue ?? ""}
						placeholder={props.placeholder ?? "Input"}
						onChange={(event: any) => {
							props.renderInputValue &&
								props.renderInputValue(event.target.value);
							event.preventDefault();
						}}
					/>
				) : (
					<input
						style={props.inputAreaStyle}
						className={
							styles.FInputFieldInputAreaDiv(
								props,
								isTriggered || isFilled || props.label === undefined
							) +
							" " +
							props.inputAreaClassName
						}
						type="text"
						ref={inputRef}
						maxLength={props.wordCount ? props.wordCount : undefined}
						value={props.inputValue ?? ""}
						placeholder={props.placeholder ?? "Input"}
						onChange={(event: any) =>
							props.renderInputValue &&
							props.renderInputValue(event.target.value)
						}
					/>
				)}
			</div>
			<FText
				font={FFontTypes.Text()}
				color={
					isTriggered
						? theme.mainThemeColor
						: isFilled
						? FColorTypes.PRIMARY_BLACK
						: FColorTypes.PRIMARY_GREY
				}
				style={props.wordCountStyle}
				className={
					styles.FInputFieldWordCountDiv + " " + props.wordCountClassName
				}
				{...props.wordCountProps}
			>
				{props.wordCount && props.wordCount > 0 && props.inputValue
					? `${props.inputValue.length}/${props.wordCount}`
					: ""}
			</FText>
		</div>
	);
};
