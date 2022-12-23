import { FFontTypes } from "@innoplus-studio/fui-fontlib";
import React, { useState, useRef, useEffect } from "react";
import { FText } from "../FText";
import { FJoinClassNames } from "../utils/FJoinClassNames";
import { FReturnColor } from "../utils/FReturnColor";
import { inputAreaDiv, inputFieldDiv } from "./styles";
import { FNumberInputFieldProps } from "./types";

export const FNumberInputField = (props: FNumberInputFieldProps) => {
	const {
		value = 0,
		placeholder = "Input",
		disabled = false,
		autoFocus = false,
		label,
		labelProps,
		style,
		className,
		inputAreaStyle,
		inputAreaClassName,
		onInput,
	} = props;

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
			style={style}
			className={FJoinClassNames([
				inputFieldDiv(isTriggered, isFilled, disabled),
				className,
			])}
			onClick={() => {
				if (!disabled) setIsTriggered(true);
			}}
			onBlur={() => {
				setIsTriggered(false);
				if (value === undefined) setIsFilled(false);
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
			<input
				style={inputAreaStyle}
				className={FJoinClassNames([
					inputAreaDiv(
						isTriggered || isFilled || label === undefined,
						disabled
					),
					inputAreaClassName,
				])}
				type="number"
				ref={inputRef}
				value={value}
				placeholder={placeholder}
				onChange={(event) => {
					if (!disabled) {
						onInput && onInput(Number(event.target.value));
					}
				}}
			/>
		</div>
	);
};
