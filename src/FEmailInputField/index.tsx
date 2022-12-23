import { FEmailInputFieldProps } from "./types";
import React, { useEffect, useRef, useState } from "react";
import {
	emailInputFieldContainer,
	emailInputFieldWrapper,
	inputAreaDiv,
} from "./styles";
import { FIcon, FIconNames } from "@innoplus-studio/fui-iconlib";
import { FFontTypes } from "@innoplus-studio/fui-fontlib";
import { FText, FReturnColor, FJoinClassNames } from "..";

/** `<FEmailInputField />` is a component for _email input_ only.
 *
 * Props: `FEmailInputFieldProps`.
 */
export const FEmailInputField = (props: FEmailInputFieldProps) => {
	const {
		placeholder = "Your Email",
		value = "",
		disabled = false,
		warningLabel = "Error: Input is missing an '@'.",
		autoValidateEmail = true,
		autoFocus = false,
		style,
		wrapperStyle,
		inputAreaStyle,
		className,
		wrapperClassName,
		inputAreaClassName,
		leadingComponent,
		actionComponent,
		emailIconProps,
		warningLabelProps,
		onEnterPress,
		onInput,
	} = props;

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
				onEnterPress && onEnterPress(false);
			} else {
				setIsError(true);
				onEnterPress && onEnterPress(true);
			}
		}
	}, [value, enterPress]);

	/** Check email type if autoValidateEmail without pressing `Enter` key */
	useEffect(() => {
		if (!isTriggered && isFilled && autoValidateEmail) {
			if (value.includes("@")) {
				setIsError(false);
				onEnterPress && onEnterPress(false);
			} else {
				setIsError(true);
				onEnterPress && onEnterPress(true);
			}
		}
	}, [value, isTriggered, isFilled, autoValidateEmail]);

	return (
		<div
			style={wrapperStyle}
			className={FJoinClassNames([
				emailInputFieldWrapper(isError, disabled!),
				wrapperClassName,
			])}
		>
			<div
				style={style}
				className={FJoinClassNames([
					emailInputFieldContainer(isTriggered, isFilled),
					className,
				])}
				onClick={() => (disabled ? undefined : setIsTriggered(true))}
				onBlur={() => {
					setIsTriggered(false);
					if (value === undefined || value === "") setIsFilled(false);
					else setIsFilled(true);
				}}
			>
				{leadingComponent ?? (
					<FIcon
						name={FIconNames.EMAIL}
						color={() =>
							isTriggered
								? FReturnColor({ color: "Main" })
								: FReturnColor({ color: "Black" })
						}
						{...emailIconProps}
					/>
				)}
				<input
					style={inputAreaStyle}
					className={inputAreaDiv() + " " + inputAreaClassName}
					type={autoValidateEmail || disabled ? "text" : "email"}
					ref={emailInputRef}
					value={value}
					placeholder={placeholder}
					onChange={(event) => {
						if (!disabled) {
							setEnterPressed(false);
							onInput && onInput(event.target.value);
						}
					}}
					onKeyDown={(event) => {
						if (event.key === "Enter") {
							if (!disabled) {
								if (autoValidateEmail) setEnterPressed(true);
								else onEnterPress && onEnterPress();
							}
						}
					}}
				/>
				{actionComponent}
			</div>
			{isError && (
				<FText
					font={FFontTypes.Text()}
					color={FReturnColor({ color: "Red" })}
					children={warningLabel}
					{...warningLabelProps}
				/>
			)}
		</div>
	);
};
