import { FFontTypes } from "@innoplus-studio/fui-fontlib";
import { FIcon, FIconNames } from "@innoplus-studio/fui-iconlib";
import React, { useRef, useState } from "react";
import { useHover, useOnClickOutside } from "usehooks-ts";
import { FText, FDropdown, FReturnColor, FJoinClassNames } from "..";
import {
	styles,
	selectContainer,
	contentDiv,
	selectDropdownWrapper,
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
export const FSelect = <T,>(props: FSelectProps<T>) => {
	const {
		ref: ref,
		label = "Title",
		placeholder = "Select an option",
		showLabelOnly = false,
		disabled,
		selectedOptions,
		selectedOptionProps,
		labelProps,
		onSelect,
		onClear,
		options,
		customOption,
		renderOptionNameOnly,
		renderSelectedOptionNameOnly,
		style,
		wrapperStyle,
		dropdownWrapperStyle,
		contentContainerStyle,
		className,
		wrapperClassName,
		dropdownWrapperClassName,
		contentContainerClassName,
		dropdownProps,
		arrowIconProps,
		clearIconProps,
		customArrowIcon,
		customClearIcon,
		customDropdown,
		customSelectedOption,
	} = props;

	const hoverRef = useRef(null);
	const isHover = useHover(hoverRef);
	const [openDropdown, setOpenDropdown] = useState<boolean>(false);
	const withDropdownRef = useRef<HTMLDivElement>(null);
	const blackColor = FReturnColor({ color: "Black" });
	const greyColor = FReturnColor({ color: "Grey" });
	const mainThemeColor = FReturnColor({ color: "Main" });

	const selectorStyleProps: FSelectContainerStyleProps<T> = {
		isClicked: openDropdown,
		disabled: disabled!,
		selectedOptions: selectedOptions,
	};

	const handleSelectedOption = async (_selectedOption: any) => {
		await onSelect(_selectedOption);
		setOpenDropdown(false);
	};

	const handleClearSelectedOption = () => {
		if (onClear) onClear();
		setOpenDropdown(false);
	};

	const handleClickOutside = (event: any) => {
		if (
			withDropdownRef.current &&
			!withDropdownRef.current.contains(event.target)
		)
			setOpenDropdown(false);
	};

	useOnClickOutside(withDropdownRef, handleClickOutside);

	const DefaultSelector = (selectedOption: T | null) => {
		return (
			<>
				<FText
					font={FFontTypes.Text()}
					color={
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
					{...labelProps}
				/>
				<FText
					font={FFontTypes.Large_Text()}
					color={selectedOption === null ? greyColor : blackColor}
					{...selectedOptionProps}
				>
					{selectedOption === null
						? showLabelOnly
							? ""
							: placeholder
						: renderSelectedOptionNameOnly
						? renderSelectedOptionNameOnly(selectedOption)
						: renderOptionNameOnly
						? renderOptionNameOnly(selectedOption)
						: (selectedOption as unknown as string)}
				</FText>
			</>
		);
	};

	return (
		<div
			style={wrapperStyle}
			className={FJoinClassNames([styles.selectWrapper, wrapperClassName])}
			ref={withDropdownRef}
		>
			<div
				ref={ref ?? hoverRef}
				style={style}
				className={FJoinClassNames([
					selectContainer(selectorStyleProps, isHover),
					className,
				])}
			>
				<div
					style={contentContainerStyle}
					className={FJoinClassNames([
						contentDiv(showLabelOnly),
						contentContainerClassName,
					])}
					onClick={() =>
						disabled ? undefined : setOpenDropdown(!openDropdown)
					}
				>
					{selectedOptions !== null
						? customSelectedOption
							? customSelectedOption(selectedOptions)
							: customOption
							? customOption(selectedOptions)
							: DefaultSelector(selectedOptions)
						: DefaultSelector(null)}
				</div>
				{!selectedOptions ? (
					customArrowIcon ? (
						customArrowIcon
					) : (
						<FIcon
							name={FIconNames.RANKING}
							color={(isHover) =>
								isHover ? blackColor : openDropdown ? blackColor : greyColor
							}
							size="small"
							onClick={() =>
								disabled ? undefined : setOpenDropdown(!openDropdown)
							}
							{...arrowIconProps}
						/>
					)
				) : (
					onClear &&
					selectedOptions &&
					(customClearIcon ?? (
						<FIcon
							name={FIconNames.CLOSE}
							color={(isHover) =>
								isHover ? blackColor : openDropdown ? blackColor : greyColor
							}
							size="small"
							onClick={handleClearSelectedOption}
							{...clearIconProps}
						/>
					))
				)}
			</div>
			{openDropdown && (
				<div
					style={dropdownWrapperStyle}
					className={
						selectDropdownWrapper(withDropdownRef, openDropdown) +
						" " +
						dropdownWrapperClassName
					}
				>
					{customDropdown ?? (
						<FDropdown
							options={options}
							selectedOptions={selectedOptions}
							onSelect={handleSelectedOption}
							customOption={customOption}
							renderOptionNameOnly={renderOptionNameOnly}
							{...dropdownProps}
						/>
					)}
				</div>
			)}
		</div>
	);
};
