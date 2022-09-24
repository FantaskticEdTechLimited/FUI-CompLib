import { FEmailInputFieldProps } from "./types";
import React, { useEffect, useRef, useState } from "react";
import * as styles from "./styles";
import { FIcon, FIconNames } from "@fantaskticedtechlimited/fui-iconlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FText, FUseColor } from "..";

/** `<FEmailInputField />` is an `Input` component for email only.
 *
 * Props: `FEmailInputFieldProps`.
 */
export const FEmailInputField = ({
	placeholder = "Your Email",
	inputValue = "",
	disabled = false,
	warningLabel = "Error: Input is missing an '@'.",
	autoValidateEmail = true,
	...props
}: FEmailInputFieldProps) => {
	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const [isFilled, setIsFilled] = useState<boolean>(false);
	const [enterPress, setEnterPressed] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const emailInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (isTriggered && emailInputRef.current) emailInputRef.current.focus();
	}, [isTriggered]);

	/** Check email type if autoValidateEmail and pressing `Enter` key */
	useEffect(() => {
		if (inputValue && inputValue.length > 0 && enterPress) {
			if (inputValue.includes("@")) {
				setIsError(false);
				props.onEnterPress && props.onEnterPress(false);
			} else {
				setIsError(true);
				props.onEnterPress && props.onEnterPress(true);
			}
		}
	}, [inputValue, enterPress]);

	/** Check email type if autoValidateEmail without pressing `Enter` key */
	useEffect(() => {
		if (!isTriggered && isFilled && autoValidateEmail) {
			if (inputValue.includes("@")) {
				setIsError(false);
				props.onEnterPress && props.onEnterPress(false);
			} else {
				setIsError(true);
				props.onEnterPress && props.onEnterPress(true);
			}
		}
	}, [inputValue, isTriggered, isFilled, autoValidateEmail]);

	return (
		<div
			style={props.wrapperStyle}
			className={
				styles.FEmailInputFieldWrapper(isError, disabled!) +
				" " +
				props.wrapperClassName
			}
		>
			<div
				style={props.containerStyle}
				className={
					styles.FEmailInputFieldContainer(isTriggered, isFilled) +
					" " +
					props.containerClassName
				}
				onClick={() => (disabled ? undefined : setIsTriggered(true))}
				onBlur={() => {
					setIsTriggered(false);
					if (inputValue === undefined || inputValue === "") setIsFilled(false);
					else setIsFilled(true);
				}}
			>
				{props.leadingComponent ?? (
					<FIcon
						name={FIconNames.EMAIL}
						strokeColor={
							isTriggered
								? FUseColor({ colorName: "Main" })
								: FUseColor({ colorName: "Black" })
						}
						style={props.emailIconStyle}
						className={props.emailIconClassName}
						{...props.emailIconProps}
					/>
				)}
				<input
					style={props.inputAreaStyle}
					className={
						styles.FEmailInputFieldInputAreaDiv() +
						" " +
						props.inputAreaClassName
					}
					type={autoValidateEmail || disabled ? "text" : "email"}
					ref={emailInputRef}
					value={inputValue}
					placeholder={placeholder}
					onChange={(event) => {
						if (!disabled) {
							setEnterPressed(false);
							props.renderInputValue &&
								props.renderInputValue(event.target.value);
						}
					}}
					onKeyDown={(event) => {
						if (event.key === "Enter") {
							if (!disabled) {
								if (autoValidateEmail) setEnterPressed(true);
								else props.onEnterPress && props.onEnterPress();
							}
						}
					}}
				/>
				{props.actionComponent}
			</div>
			{isError && (
				<FText
					font={FFontTypes.Text()}
					color={FUseColor({ colorName: "Red" })}
					children={warningLabel}
					style={props.warningLabelStyle}
					className={props.warninglabelClassName}
					{...props.warningLabelProps}
				/>
			)}
		</div>
	);
};
