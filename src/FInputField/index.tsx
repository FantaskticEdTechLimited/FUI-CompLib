import React, { useState, useEffect, useRef } from "react";
import { FText } from "..";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import * as styles from "./styles";
import { FInputFieldProps } from "./types";

export const FInputField = (props: FInputFieldProps) => {
	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const [isFilled, setIsFilled] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		if (textareaRef && textareaRef.current) {
			textareaRef.current.style.height = "auto";
			const scrollHeight = textareaRef.current.scrollHeight;
			if (scrollHeight !== 0)
				textareaRef.current.style.height = scrollHeight + "px";
		}
		if (props.value) setIsFilled(true);
		else setIsFilled(false);
	}, [props.value]);

	useEffect(() => {
		if (isTriggered && inputRef.current) inputRef.current.focus();
		if (isTriggered && textareaRef.current) textareaRef.current.focus();
	}, [isTriggered]);

	return (
		<div
			style={props.containerStyle}
			className={
				props.containerClassName + " " + styles.FInputFieldContainer(props)
			}
		>
			<div
				style={props.inputDivStyle}
				className={
					props.inputDivClassName +
					" " +
					styles.FInputFieldDiv(props, isTriggered, isFilled)
				}
				onClick={() => {
					if (!props.disabled) setIsTriggered(true);
				}}
				onBlur={() => {
					setIsTriggered(false);
					if (props.value === "") setIsFilled(false);
					else setIsFilled(true);
				}}
			>
				{props.label && (
					<FText
						font={
							isTriggered || isFilled ? FFontTypes.Text : FFontTypes.Large_Text
						}
						color={
							isTriggered
								? FColorTypes.BRAND
								: isFilled
								? FColorTypes.BLACK
								: FColorTypes.GREY
						}
					>
						{props.label}
					</FText>
				)}
				{props.multiline ? (
					<textarea
						style={props.inputAreaStyle}
						className={
							props.inputAreaClassName +
							" " +
							styles.FInputFieldInputAreaDiv(props, isTriggered || isFilled)
						}
						ref={textareaRef}
						maxLength={props.wordcount ? props.wordcount : undefined}
						defaultValue={props.defaultValue ?? "Title"}
						value={props.value!}
						onChange={(event: any) =>
							props.renderValue && props.renderValue(event.target.value)
						}
					/>
				) : (
					<input
						style={props.inputAreaStyle}
						className={
							props.inputAreaClassName +
							" " +
							styles.FInputFieldInputAreaDiv(props, isTriggered || isFilled)
						}
						type="text"
						ref={inputRef}
						maxLength={props.wordcount ? props.wordcount : undefined}
						defaultValue={props.defaultValue ?? "Title"}
						value={props.value!}
						onChange={(event: any) =>
							props.renderValue && props.renderValue(event.target.value)
						}
					/>
				)}
			</div>
			<FText
				font={FFontTypes.Text}
				color={
					isTriggered
						? FColorTypes.BRAND
						: isFilled
						? FColorTypes.BLACK
						: FColorTypes.GREY
				}
				style={{ textAlign: "right" }}
			>
				{props.wordcount ? `${props.value!.length}/${props.wordcount}` : ""}
			</FText>
		</div>
	);
};
