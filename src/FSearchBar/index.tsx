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
	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (isTriggered && inputRef.current) inputRef.current.focus();
	}, [isTriggered]);

	return (
		<div
			style={props.style}
			className={FSearchBar_Container(isTriggered) + " " + props.className}
			onClick={() => setIsTriggered(true)}
			onBlur={() => setIsTriggered(false)}
		>
			<SearchIcon
				isTriggered={isTriggered}
				value={value}
				{...props.searchIconProps}
			/>
			<input
				style={props.inputStyle}
				className={FSearchBar_InputAreaDiv() + " " + props.inputClassName}
				type="text"
				ref={inputRef}
				value={value}
				placeholder={placeholder}
				onChange={(event: any) =>
					props.onInput && props.onInput(event.target.value)
				}
			/>
			{value?.length > 0 && (
				<ClearIcon
					onClick={() => props.onInput && props.onInput("")}
					{...props.clearIconProps}
				/>
			)}
		</div>
	);
};
