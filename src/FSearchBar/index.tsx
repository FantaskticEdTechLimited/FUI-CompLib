import React, { useEffect, useRef, useState } from "react";
import * as styles from "./styles";
import { ClearIcon } from "./svg/ClearIcon";
import { SearchIcon } from "./svg/SearchIcon";
import { FSearchBarProps } from "./types";

export const FSearchBar = (props: FSearchBarProps) => {
	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (isTriggered && inputRef.current) inputRef.current.focus();
	}, [isTriggered]);

	return (
		<div
			style={props.containerStyle}
			className={
				styles.FSearchBarContainer(isTriggered) + " " + props.containerClassName
			}
			onClick={() => setIsTriggered(true)}
			onBlur={() => setIsTriggered(false)}
		>
			<SearchIcon
				isTriggered={isTriggered}
				value={props.value!}
				className={props.searchIconClassName}
				style={props.searchIconStyle}
			/>
			<input
				style={props.inputAreaStyle}
				className={
					styles.FSearchBarInputAreaDiv() + " " + props.inputAreaClassName
				}
				type="text"
				ref={inputRef}
				value={props.value}
				placeholder={props.placeholder ?? "Search"}
				onChange={(event: any) =>
					props.onInput && props.onInput(event.target.value)
				}
			/>
			{props.value && props.value.length > 0 && (
				<ClearIcon
					className={props.clearIconClassName}
					style={props.clearIconStyle}
					onClick={() => props.onInput && props.onInput("")}
				/>
			)}
		</div>
	);
};
