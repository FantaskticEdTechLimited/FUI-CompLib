import React, { useEffect, useRef, useState } from "react";
import { useHover } from "usehooks-ts";
import { FJoinClassNames } from "../utils/FJoinClassNames";
import { searchBarContainer, inputAreaDiv } from "./styles";
import { ClearIcon } from "./svg/ClearIcon";
import { SearchIcon } from "./svg/SearchIcon";
import { FSearchBarProps, InputStateProps } from "./types";

/**
 * `<FSearchBar />` is a component for search input.
 *
 * _May add dropdown component for searching in the future_.
 *
 * Props: `FSearchBarProps`.
 */
export const FSearchBar = (props: FSearchBarProps) => {
	const {
		placeholder = "Search",
		value = "",
		style,
		inputStyle,
		className,
		inputClassName,
		clearIconProps,
		searchIconProps,
		onInput,
		onBlur,
		onClick,
		ref: ref,
	} = props;
	const hoverRef = useRef(null);
	const isHover = useHover(hoverRef);
	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const [isFilled, setIsFilled] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const inputState: InputStateProps = {
		isHover: isHover,
		isTriggered: isTriggered,
		isFilled: isFilled,
	};

	useEffect(() => {
		if (isTriggered && inputRef.current) inputRef.current.focus();
	}, [isTriggered]);

	return (
		<div
			ref={ref ?? hoverRef}
			style={style && style(inputState)}
			className={FJoinClassNames([
				searchBarContainer(inputState),
				className && className(inputState),
			])}
			onClick={() => {
				onClick && onClick();
				setIsTriggered(true);
			}}
			onBlur={() => {
				onBlur && onBlur();
				setIsTriggered(false);
				if (value === undefined || value === "") setIsFilled(false);
				else setIsFilled(true);
			}}
		>
			<SearchIcon state={inputState} value={value} {...searchIconProps} />
			<input
				style={inputStyle && inputStyle(inputState)}
				className={FJoinClassNames([
					inputAreaDiv(),
					inputClassName && inputClassName(inputState),
				])}
				type="text"
				ref={inputRef}
				value={value}
				placeholder={placeholder}
				onChange={(event: any) => onInput(event.target.value)}
			/>
			{value?.length > 0 && (
				<ClearIcon onClick={() => onInput("")} {...clearIconProps} />
			)}
		</div>
	);
};
