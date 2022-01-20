import { FPasswordInputFieldProps } from "./types";
import * as styles from "./styles";
import React, { useEffect, useRef, useState } from "react";
import { LockIcon } from "./svg/LockIcon";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { EyeIcon } from "./svg/EyeIcon";
import { EyeOffIcon } from "./svg/EyeOffIcon";

export const FPasswordInputField = (props: FPasswordInputFieldProps) => {
	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const [isFilled, setIsFilled] = useState<boolean>(false);
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [asciiDifferenceValue, setAsciiDifferenceValue] = useState<number[]>(
		[]
	);
	const [showInputValue, setShowInputValue] = useState<number[]>([]);
	const [hideInputValue, setHideInputValue] = useState<number[]>([]);
	const passwordInputRef = useRef<HTMLInputElement>(null);
	let tempNumberArray: number[] = [];
	let tempString: string = "";

	useEffect(() => {
		if (isTriggered && passwordInputRef.current)
			passwordInputRef.current.focus();
	}, [isTriggered]);

	useEffect(() => {
		if (props.showPassword) setShowPassword(true);
	}, [props.showPassword]);

	useEffect(() => {
		if (props.inputValue) {
			for (let index = 0; index < props.inputValue.length; index++) {
				if (props.inputValue.charCodeAt(index) === 42) {
					tempNumberArray.push(asciiDifferenceValue[index]);
				} else tempNumberArray.push(props.inputValue.charCodeAt(index) - 42);
			}
			setAsciiDifferenceValue(tempNumberArray);
			tempNumberArray = [];
			if (showPassword == false) {
				for (let index = 0; index < props.inputValue.length; index++) {
					tempNumberArray.push(42);
				}
				setHideInputValue(tempNumberArray);
			}
		}
	}, [props.inputValue]);

	useEffect(() => {
		if (showPassword) {
			for (let index = 0; index < asciiDifferenceValue.length; index++) {
				tempNumberArray.push(asciiDifferenceValue[index] + 42);
			}
			setShowInputValue(tempNumberArray);
		} else {
			for (let index = 0; index < asciiDifferenceValue.length; index++) {
				tempNumberArray.push(42);
			}
			setHideInputValue(tempNumberArray);
		}
	}, [showPassword]);

	useEffect(() => {
		if (showInputValue) {
			for (let index = 0; index < showInputValue.length; index++) {
				tempString += String.fromCharCode(showInputValue[index]);
			}
			props.renderInputValue && props.renderInputValue(tempString);
		}
	}, [showInputValue]);

	useEffect(() => {
		if (hideInputValue) {
			for (let index = 0; index < hideInputValue.length; index++) {
				tempString += String.fromCharCode(hideInputValue[index]);
			}
			props.renderInputValue && props.renderInputValue(tempString);
		}
	}, [hideInputValue]);

	return (
		<div
			style={props.containerStyle}
			className={
				props.containerClassName +
				" " +
				styles.FPasswordInputFieldContainer(
					isTriggered,
					isFilled,
					props.disabled!
				)
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
						isTriggered ? FColorTypes.BRAND : FColorTypes.PRIMARY_BLACK
					}
					disabled={props.disabled}
					{...props.lockIconProps}
				/>
			)}
			<input
				style={props.inputAreaStyle}
				className={
					props.inputAreaClassName +
					" " +
					styles.FPasswordInputFieldInputAreaDiv(props.disabled!)
				}
				type="text"
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
					{...props.eyeOffIconPorps}
					disabled={props.disabled}
					onClick={() => (props.disabled ? undefined : setShowPassword(true))}
				/>
			)}
		</div>
	);
};
