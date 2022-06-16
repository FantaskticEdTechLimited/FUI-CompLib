import { FEmailInputFieldProps } from "./types";
import React, { useEffect, useRef, useState } from "react";
import * as styles from "./styles";
import { FIcon, FIconNames } from "@fantaskticedtechlimited/fui-iconlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FCheckIsDarkMode, FGetThemeColor, FText } from "..";
import { FUseColor } from "@fantaskticedtechlimited/fui-colorlib";

export const FEmailInputField = (props: FEmailInputFieldProps) => {
	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const [isFilled, setIsFilled] = useState<boolean>(false);
	const [enterPress, setEnterPressed] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const emailInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (isTriggered && emailInputRef.current) emailInputRef.current.focus();
	}, [isTriggered]);

	// check input is of email type
	useEffect(() => {
		if (props.inputValue && props.inputValue.length > 0 && enterPress) {
			if (props.inputValue.includes("@")) {
				setIsError(false);
				props.onEnterPress && props.onEnterPress(false);
			} else {
				setIsError(true);
				props.onEnterPress && props.onEnterPress(true);
			}
		}
	}, [props.inputValue, enterPress]);

	return (
		<div
			style={props.wrapperStyle}
			className={
				styles.FEmailInputFieldWrapper(isError, props.disabled!) +
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
				onClick={() => (props.disabled ? undefined : setIsTriggered(true))}
				onBlur={() => {
					setIsTriggered(false);
					if (props.inputValue === undefined || props.inputValue === "")
						setIsFilled(false);
					else setIsFilled(true);
				}}
			>
				{props.iconComponent ?? (
					<FIcon
						name={FIconNames.EMAIL}
						strokeColor={
							isTriggered
								? FGetThemeColor("Main")
								: FUseColor({
										colorName: "Black",
										isDarkMode: FCheckIsDarkMode(),
								  })
						}
						style={props.iconStyle}
						className={props.iconClassName}
						{...props.iconProps}
					/>
				)}
				<input
					style={props.inputAreaStyle}
					className={
						styles.FEmailInputFieldInputAreaDiv() +
						" " +
						props.inputAreaClassName
					}
					type={props.checkInput || props.disabled ? "text" : "email"}
					ref={emailInputRef}
					value={props.inputValue ?? ""}
					placeholder={props.placeholder ?? "Your Email"}
					onChange={(event: any) => {
						if (!props.disabled) {
							setEnterPressed(false);
							setIsError(false);
							props.renderInputValue &&
								props.renderInputValue(event.target.value);
						}
					}}
					onKeyDown={(event: any) => {
						if (event.key === "Enter") {
							if (!props.disabled) {
								if (props.checkInput) setEnterPressed(true);
								else props.onEnterPress && props.onEnterPress();
							}
						}
					}}
				/>
			</div>
			{isError && (
				<FText
					font={FFontTypes.Text()}
					color={FUseColor({
						colorName: "Red",
						isDarkMode: FCheckIsDarkMode(),
					})}
					children={props.warningLabel ?? "Error: Input is missing an '@'."}
					style={props.warningLabelStyle}
					className={props.warninglabelClassName}
					{...props.warningLabelProps}
				/>
			)}
		</div>
	);
};
