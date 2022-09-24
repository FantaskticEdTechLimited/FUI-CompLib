import { FPasswordInputFieldProps } from "./types";
import * as styles from "./styles";
import React, { useEffect, useRef, useState } from "react";
import { LockIcon } from "./svg/LockIcon";
import { EyeIcon } from "./svg/EyeIcon";
import { EyeOffIcon } from "./svg/EyeOffIcon";
import { FUseColor } from "../utils";

/** `<FPasswordInputField />` is an `Input` component for password only.
 *
 * Props: `FPasswordInputFieldProps`.
 */
export const FPasswordInputField = ({
	placeholder = "Password",
	inputValue = "",
	showPassword = false,
	disabled = false,
	...props
}: FPasswordInputFieldProps) => {
	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const [isFilled, setIsFilled] = useState<boolean>(false);
	const [displayPassword, setDisplayPassword] = useState<boolean>(false);
	const passwordInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (isTriggered && passwordInputRef.current)
			passwordInputRef.current.focus();
	}, [isTriggered]);

	useEffect(() => {
		if (showPassword) setDisplayPassword(true);
	}, [showPassword]);

	return (
		<div
			style={props.containerStyle}
			className={
				styles.FPasswordInputFieldContainer(isTriggered, isFilled, disabled) +
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
				<LockIcon
					strokeColor={
						isTriggered
							? FUseColor({ colorName: "Main" })
							: FUseColor({ colorName: "Black" })
					}
					disabled={disabled}
					{...props.lockIconProps}
				/>
			)}
			<input
				style={props.inputAreaStyle}
				className={
					styles.FPasswordInputFieldInputAreaDiv(disabled) +
					" " +
					props.inputAreaClassName
				}
				type={displayPassword ? "text" : "password"}
				ref={passwordInputRef}
				placeholder={placeholder}
				value={inputValue}
				onChange={(event) => {
					if (!disabled) {
						props.renderInputValue &&
							props.renderInputValue(event.target.value);
					}
				}}
				onKeyDown={(event) => {
					if (event.key === "Enter") {
						!disabled && props.onEnterPress && props.onEnterPress();
					}
				}}
			/>
			{(props.actionComponents && props.actionComponents(displayPassword)) ??
			displayPassword ? (
				<EyeIcon
					{...props.eyeIconProps}
					disabled={disabled}
					onClick={() => (disabled ? undefined : setDisplayPassword(false))}
				/>
			) : (
				<EyeOffIcon
					{...props.eyeOffIconProps}
					disabled={disabled}
					onClick={() => (disabled ? undefined : setDisplayPassword(true))}
				/>
			)}
		</div>
	);
};
