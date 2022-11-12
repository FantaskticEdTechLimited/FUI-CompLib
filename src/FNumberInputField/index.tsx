import { FFontTypes } from "@innoplus-studio/fui-fontlib";
import React, { useState, useRef, useEffect } from "react";
import { FText } from "../FText";
import { FReturnColor } from "../utils/FReturnColor";
import { FNumberInputFieldInputAreaDiv, FNumberInputFieldDiv } from "./styles";
import { FNumberInputFieldProps } from "./types";

export const FNumberInputField = ({
	value = 0,
	placeholder = "Input",
	disabled = false,
	autoFocus = false,
	...props
}: FNumberInputFieldProps) => {
	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const [isFilled, setIsFilled] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const mainThemeColor = FReturnColor({ color: "Main" });
	const blackColor = FReturnColor({ color: "Black" });
	const greyColor = FReturnColor({ color: "Grey" });

	useEffect(() => {
		if (isTriggered && inputRef.current) inputRef.current.focus();
	}, [isTriggered]);

	useEffect(() => {
		if (autoFocus && !disabled) setIsTriggered(true);
		else setIsTriggered(false);
	}, [autoFocus, disabled]);

	return (
		<div
			style={props.inputDivStyle}
			className={
				FNumberInputFieldDiv(isTriggered, isFilled, disabled) +
				" " +
				props.inputDivClassName
			}
			onClick={() => {
				if (!disabled) setIsTriggered(true);
			}}
			onBlur={() => {
				setIsTriggered(false);
				if (value === undefined) setIsFilled(false);
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
			<input
				style={props.inputAreaStyle}
				className={
					FNumberInputFieldInputAreaDiv(
						isTriggered || isFilled || props.label === undefined,
						disabled
					) +
					" " +
					props.inputAreaClassName
				}
				type="number"
				ref={inputRef}
				value={value}
				placeholder={placeholder}
				onChange={(event) => {
					if (!disabled) {
						props.onInput && props.onInput(Number(event.target.value));
					}
				}}
			/>
		</div>
	);
};
