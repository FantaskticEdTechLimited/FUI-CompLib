import { FPasswordInputFieldProps } from "./types";
import * as styles from "./styles";
import React, { useEffect, useRef, useState } from "react";
import { LockIcon } from "./svg/LockIcon";
import { EyeIcon } from "./svg/EyeIcon";
import { EyeOffIcon } from "./svg/EyeOffIcon";
import { FReturnColor } from "../utils/FReturnColor";

/** `<FPasswordInputField />` is a component for _password input_ only.
 *
 * Props: `FPasswordInputFieldProps`. 
 */
export const FPasswordInputField = ({
	placeholder = "Password",
	value = "",
	showPassword = false,
	disabled = false,
	autoFocus = false,
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
		if (autoFocus && !disabled) setIsTriggered(true);
		else setIsTriggered(false);
	}, [autoFocus, disabled]);

	useEffect(() => {
		if (showPassword) setDisplayPassword(true);
	}, [showPassword]);

	return (
		<div
			style={props.style}
			className={
				styles.FPasswordInputFieldContainer(isTriggered, isFilled, disabled) +
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
				<LockIcon
					strokeColor={
						isTriggered
							? FReturnColor({ color: "Main" })
							: FReturnColor({ color: "Black" })
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
				value={value}
				onChange={(event) => {
					if (!disabled) {
						props.onInput && props.onInput(event.target.value);
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
