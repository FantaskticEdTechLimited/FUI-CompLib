import { FPasswordInputFieldProps } from "./types";
import { inputAreaDiv, inputFieldContainer } from "./styles";
import React, { useEffect, useRef, useState } from "react";
import { LockIcon } from "./svg/LockIcon";
import { EyeIcon } from "./svg/EyeIcon";
import { EyeOffIcon } from "./svg/EyeOffIcon";
import { FReturnColor } from "../utils/FReturnColor";
import { FJoinClassNames } from "../utils/FJoinClassNames";

/** `<FPasswordInputField />` is a component for _password input_ only.
 *
 * Props: `FPasswordInputFieldProps`.
 */
export const FPasswordInputField = (props: FPasswordInputFieldProps) => {
	const {
		placeholder = "Password",
		value = "",
		isShowPassword = false,
		disabled = false,
		autoFocus = false,
		leadingComponent,
		actionComponents,
		onEnterPress,
		onInput,
		style,
		inputAreaStyle,
		className,
		inputAreaClassName,
		eyeIconProps,
		lockIconProps,
		eyeOffIconProps,
	} = props;

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
		if (isShowPassword) setDisplayPassword(true);
	}, [isShowPassword]);

	return (
		<div
			style={style}
			className={FJoinClassNames([
				inputFieldContainer(isTriggered, isFilled, disabled),
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
				<LockIcon
					strokeColor={
						isTriggered
							? FReturnColor({ color: "Main" })
							: FReturnColor({ color: "Black" })
					}
					disabled={disabled}
					{...lockIconProps}
				/>
			)}
			<input
				style={inputAreaStyle}
				className={FJoinClassNames([
					inputAreaDiv(disabled),
					inputAreaClassName,
				])}
				type={displayPassword ? "text" : "password"}
				ref={passwordInputRef}
				placeholder={placeholder}
				value={value}
				onChange={(event) => {
					if (!disabled) {
						onInput && onInput(event.target.value);
					}
				}}
				onKeyDown={(event) => {
					if (event.key === "Enter") {
						!disabled && onEnterPress && onEnterPress();
					}
				}}
			/>
			{(actionComponents && actionComponents(displayPassword)) ??
			displayPassword ? (
				<EyeIcon
					{...eyeIconProps}
					disabled={disabled}
					onClick={() => (disabled ? undefined : setDisplayPassword(false))}
				/>
			) : (
				<EyeOffIcon
					{...eyeOffIconProps}
					disabled={disabled}
					onClick={() => (disabled ? undefined : setDisplayPassword(true))}
				/>
			)}
		</div>
	);
};
