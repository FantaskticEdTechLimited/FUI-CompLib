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
				props.containerClassName + " " + styles.FSearchBarContainer(isTriggered)
			}
			onClick={() => setIsTriggered(true)}
			onBlur={() => setIsTriggered(false)}
		>
			<SearchIcon
				isTriggered={isTriggered}
				inputValue={props.inputValue!}
				className={props.searchIconClassName}
				style={props.searchIconStyle}
			/>
			<input
				style={props.inputAreaStyle}
				className={
					props.inputAreaClassName + " " + styles.FSearchBarInputAreaDiv
				}
				type="text"
				ref={inputRef}
				value={props.inputValue}
				placeholder={props.placeholder ?? "Search"}
				onChange={(event: any) =>
					props.renderInputValue && props.renderInputValue(event.target.value)
				}
			/>
			{props.inputValue && props.inputValue.length > 0 && (
				<ClearIcon
					className={props.clearIconClassName}
					style={props.clearIconStyle}
					onClick={() => props.renderInputValue && props.renderInputValue("")}
				/>
			)}
		</div>
	);
};
