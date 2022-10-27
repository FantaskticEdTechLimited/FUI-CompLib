import React, { useEffect, useRef, useState } from "react";
import { FSearchBar_Container, FSearchBar_InputAreaDiv } from "./styles";
import { ClearIcon } from "./svg/ClearIcon";
import { SearchIcon } from "./svg/SearchIcon";
import { FSearchBarProps } from "./types";

/**
 * `<FSearchBar />` is a component for search input.
 *
 * _May add dropdown component for searching in the future_.
 *
 * Props: `FSearchBarProps`.
 */
export const FSearchBar = ({
	placeholder = "Search",
	value = "",
	...props
}: FSearchBarProps) => {
	const [isHover, setIsHover] = useState<boolean>(false);
	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const [isFilled, setIsFilled] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const inputState = {
		isHover: isHover,
		isTriggered: isTriggered,
		isFilled: isFilled,
	};

	useEffect(() => {
		if (isTriggered && inputRef.current) inputRef.current.focus();
	}, [isTriggered]);

	return (
		<div
			style={props.style && props.style(inputState)}
			className={
				FSearchBar_Container(isTriggered, isFilled) +
				" " +
				(props.className && props.className(inputState))
			}
			onClick={() => setIsTriggered(true)}
			onBlur={() => {
				setIsTriggered(false);
				if (value === undefined || value === "") setIsFilled(false);
				else setIsFilled(true);
			}}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<SearchIcon
				isTriggered={isTriggered}
				value={value}
				{...props.searchIconProps}
			/>
			<input
				style={props.inputStyle && props.inputStyle(inputState)}
				className={
					FSearchBar_InputAreaDiv() +
					" " +
					(props.inputClassName && props.inputClassName(inputState))
				}
				type="text"
				ref={inputRef}
				value={value}
				placeholder={placeholder}
				onChange={(event: any) => props.onInput(event.target.value)}
			/>
			{value?.length > 0 && (
				<ClearIcon
					onClick={() => props.onInput("")}
					{...props.clearIconProps}
				/>
			)}
		</div>
	);
};
