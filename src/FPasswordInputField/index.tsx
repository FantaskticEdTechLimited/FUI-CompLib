import { FPasswordInputFieldProps } from "./types";
import * as styles from "./styles";
import React, { useEffect, useRef, useState } from "react";
import { LockIcon } from "./svg/LockIcon";
import { EyeIcon } from "./svg/EyeIcon";
import { EyeOffIcon } from "./svg/EyeOffIcon";
import { FUseColor } from "../utils";

export const FPasswordInputField = (props: FPasswordInputFieldProps) => {
	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const [isFilled, setIsFilled] = useState<boolean>(false);
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const passwordInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (isTriggered && passwordInputRef.current)
			passwordInputRef.current.focus();
	}, [isTriggered]);

	useEffect(() => {
		if (props.showPassword) setShowPassword(true);
	}, [props.showPassword]);

	return (
		<div
			style={props.containerStyle}
			className={
				styles.FPasswordInputFieldContainer(
					isTriggered,
					isFilled,
					props.disabled!
				) +
				" " +
				props.containerClassName
			}
			onClick={() => (props.disabled ? undefined : setIsTriggered(true))}
			onBlur={() => {
				setIsTriggered(false);
				if (props.inputValue === undefined || props.inputValue === "")
					setIsFilled(false);
				else setIsFilled(true);
			}}
		>
			{props.leadingComponent ?? (
				<LockIcon
					strokeColor={
						isTriggered
							? FUseColor({ colorName: "Main" })
							: FUseColor({
									colorName: "Black",
							  })
					}
					disabled={props.disabled}
					{...props.lockIconProps}
				/>
			)}
			<input
				style={props.inputAreaStyle}
				className={
					styles.FPasswordInputFieldInputAreaDiv(props.disabled!) +
					" " +
					props.inputAreaClassName
				}
				type={showPassword ? "text" : "password"}
				ref={passwordInputRef}
				placeholder={props.placeholder ?? "Password"}
				value={props.inputValue ?? ""}
				onChange={(event: any) => {
					if (!props.disabled) {
						props.renderInputValue &&
							props.renderInputValue(event.target.value);
					}
				}}
				onKeyDown={(event: any) => {
					if (event.key === "Enter") {
						!props.disabled && props.onEnterPress && props.onEnterPress();
					}
				}}
			/>
			{showPassword ? (
				<EyeIcon
					{...props.eyeIconProps}
					disabled={props.disabled}
					onClick={() => (props.disabled ? undefined : setShowPassword(false))}
				/>
			) : (
				<EyeOffIcon
					{...props.eyeOffIconProps}
					disabled={props.disabled}
					onClick={() => (props.disabled ? undefined : setShowPassword(true))}
				/>
			)}
		</div>
	);
};
