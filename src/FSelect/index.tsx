import { FFontTypes } from "@innoplus-studio/fui-fontlib";
import { FIcon, FIconNames } from "@innoplus-studio/fui-iconlib";
import React, { useEffect, useRef, useState } from "react";
import { FText, FDropdown, FReturnColor } from "..";
import {
	styles,
	FSelectContainer,
	FSelectContentDiv,
	FSelectDropdownWrapper,
} from "./styles";
import { FSelectContainerStyleProps, FSelectProps } from "./types";

/**
 * `<FSelect />` is a component to show a button container for options selection.
 * After clicking it, a `dropdown` with a list of data will be shown.
 *
 * _Caution: Input is **NOT** allowed for this select component._
 * You should use `FInputSelect` instead.
 *
 * Props: `FSelectProps`.
 */
export const FSelect = <T,>({
	label = "Title",
	placeholder = "Select an option",
	showLabelOnly = false,
	...props
}: FSelectProps<T>) => {
	const [isHover, setIsHover] = useState<boolean>(false);
	const [openDropdown, setOpenDropdown] = useState<boolean>(false);
	const FSelectWithDropdownRef = useRef<HTMLDivElement>(null);
	const blackColor = FReturnColor({ color: "Black" });
	const greyColor = FReturnColor({ color: "Grey" });
	const mainThemeColor = FReturnColor({ color: "Main" });

	const selectorStyleProps: FSelectContainerStyleProps<T> = {
		isClicked: openDropdown,
		disabled: props.disabled!,
		selectedOptions: props.selectedOptions,
	};

	const handleSelectedOption = async (_selectedOption: any) => {
		await props.onSelect(_selectedOption);
		setOpenDropdown(false);
	};

	const handleClearSelectedOption = () => {
		if (props.onClear) props.onClear();
		setOpenDropdown(false);
	};

	const handleClickOutside = (event: any) => {
		if (
			FSelectWithDropdownRef.current &&
			!FSelectWithDropdownRef.current.contains(event.target)
		)
			setOpenDropdown(false);
	};

	useEffect(() => {
		window.addEventListener("mousedown", handleClickOutside);
		return () => {
			window.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const DefaultSelector = (selectedOption: T | null) => {
		return (
			<>
				<FText
					font={FFontTypes.Text()}
					color={() =>
						openDropdown
							? mainThemeColor
							: selectedOption
							? isHover
								? mainThemeColor
								: blackColor
							: isHover
							? blackColor
							: greyColor
					}
					children={label}
					{...(props.labelProps && props.labelProps(isHover))}
				/>
				<FText
					font={FFontTypes.Large_Text()}
					color={() => (selectedOption === null ? greyColor : blackColor)}
					{...props.selectedOptionProps}
				>
					{selectedOption === null
						? showLabelOnly
							? ""
							: placeholder
						: props.renderSelectedOptionNameOnly
						? props.renderSelectedOptionNameOnly(selectedOption)
						: props.renderOptionNameOnly
						? props.renderOptionNameOnly(selectedOption)
						: (selectedOption as unknown as string)}
				</FText>
			</>
		);
	};

	return (
		<div
			style={props.wrapperStyle}
			className={styles.FSelectWrapper + " " + props.wrapperClassName}
			ref={FSelectWithDropdownRef}
		>
			<div
				style={props.style && props.style(isHover)}
				className={
					FSelectContainer(selectorStyleProps, isHover) +
					" " +
					(props.className && props.className(isHover))
				}
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				<div
					style={props.contentContainerStyle}
					className={
						FSelectContentDiv(showLabelOnly) +
						" " +
						props.contentContainerClassName
					}
					onClick={() =>
						props.disabled ? undefined : setOpenDropdown(!openDropdown)
					}
				>
					{props.selectedOptions !== null
						? props.customSelectedOption
							? props.customSelectedOption(props.selectedOptions)
							: props.customOption
							? props.customOption(props.selectedOptions)
							: DefaultSelector(props.selectedOptions)
						: DefaultSelector(null)}
				</div>
				{!props.selectedOptions
					? props.customArrowIcon ?? (
							<FIcon
								name={FIconNames.RANKING}
								color={(isHover) =>
									isHover ? blackColor : openDropdown ? blackColor : greyColor
								}
								size="small"
								onClick={() =>
									props.disabled ? undefined : setOpenDropdown(!openDropdown)
								}
								{...props.arrowIconProps}
							/>
					  )
					: props.onClear &&
					  props.selectedOptions &&
					  (props.customClearIcon ?? (
							<FIcon
								name={FIconNames.CLOSE}
								color={(isHover) =>
									isHover ? blackColor : openDropdown ? blackColor : greyColor
								}
								size="small"
								onClick={handleClearSelectedOption}
								{...props.clearIconProps}
							/>
					  ))}
			</div>
			{openDropdown && (
				<div
					style={props.dropdownWrapperStyle}
					className={
						FSelectDropdownWrapper(FSelectWithDropdownRef, openDropdown) +
						" " +
						props.dropdownWrapperClassName
					}
				>
					{props.customDropdown ?? (
						<FDropdown
							options={props.options}
							selectedOptions={props.selectedOptions}
							onSelect={handleSelectedOption}
							customOption={props.customOption}
							renderOptionNameOnly={props.renderOptionNameOnly}
							{...props.dropdownProps}
						/>
					)}
				</div>
			)}
		</div>
	);
};
