import { FEmailInputFieldProps } from "./types";
import React, { useEffect, useRef, useState } from "react";
import * as styles from "./styles";
import { FIcon, FIconNames } from "@fantaskticedtechlimited/fui-iconlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FText, FReturnColor } from "..";

/** `<FEmailInputField />` is a component for _email input_ only.
 *
 * Props: `FEmailInputFieldProps`.
 */
export const FEmailInputField = ({
	placeholder = "Your Email",
	value = "",
	disabled = false,
	warningLabel = "Error: Input is missing an '@'.",
	autoValidateEmail = true,
	autoFocus = false,
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

	useEffect(() => {
		if (autoFocus && !disabled) setIsTriggered(true);
		else setIsTriggered(false);
	}, [autoFocus, disabled]);

	/** Check email type if autoValidateEmail and pressing `Enter` key */
	useEffect(() => {
		if (value && value.length > 0 && enterPress) {
			if (value.includes("@")) {
				setIsError(false);
				props.onEnterPress && props.onEnterPress(false);
			} else {
				setIsError(true);
				props.onEnterPress && props.onEnterPress(true);
			}
		}
	}, [value, enterPress]);

	/** Check email type if autoValidateEmail without pressing `Enter` key */
	useEffect(() => {
		if (!isTriggered && isFilled && autoValidateEmail) {
			if (value.includes("@")) {
				setIsError(false);
				props.onEnterPress && props.onEnterPress(false);
			} else {
				setIsError(true);
				props.onEnterPress && props.onEnterPress(true);
			}
		}
	}, [value, isTriggered, isFilled, autoValidateEmail]);

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
				style={props.style}
				className={
					styles.FEmailInputFieldContainer(isTriggered, isFilled) +
					" " +
					props.className
				}
				onClick={() => (disabled ? undefined : setIsTriggered(true))}
				onBlur={() => {
					setIsTriggered(false);
					if (value === undefined || value === "") setIsFilled(false);
					else setIsFilled(true);
				}}
			>
				{props.leadingComponent ?? (
					<FIcon
						name={FIconNames.EMAIL}
						color={() =>
							isTriggered
								? FReturnColor({ color: "Main" })
								: FReturnColor({ color: "Black" })
						}
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
					value={value}
					placeholder={placeholder}
					onChange={(event) => {
						if (!disabled) {
							setEnterPressed(false);
							props.onInput && props.onInput(event.target.value);
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
					color={() => FReturnColor({ color: "Red" })}
					children={warningLabel}
					{...props.warningLabelProps}
				/>
			)}
		</div>
	);
};
