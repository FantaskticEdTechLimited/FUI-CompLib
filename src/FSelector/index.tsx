import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FIcon, FIconTypes } from "@fantaskticedtechlimited/fui-iconlib";
import React, { useEffect, useRef, useState } from "react";
import { FText, FDropdown } from "..";
import { useFUITheme } from "../FThemeContext";
import * as styles from "./styles";
import { FSelectorContainerStyleProps, FSelectorProps } from "./types";

export const FSelector = <T,>(props: FSelectorProps<T>) => {
	const [openDropdown, setOpenDropdown] = useState<boolean>(false);
	const FSelectorWithDropdownRef = useRef<HTMLDivElement>(null);
	const { theme } = useFUITheme();

	const selectorStyleProps: FSelectorContainerStyleProps<T> = {
		isClicked: openDropdown,
		disabled: props.disabled!,
		selectedOptions: props.selectedOptions,
		theme: theme,
	};

	const placeHolder = props.placeholder ?? "Select an option";
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
			FSelectorWithDropdownRef.current &&
			!FSelectorWithDropdownRef.current.contains(event.target)
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
				{/* label */}
				<FText
					font={FFontTypes.Text()}
					color={
						openDropdown
							? theme.mainThemeColor
							: selectedOption
							? FColorTypes.PRIMARY_BLACK
							: FColorTypes.PRIMARY_GREY
					}
					children={props.label ?? "Title"}
					style={props.labelStyle}
					className={props.labelClassName}
					{...props.labelProps}
				/>
				{/* Content or placeHolder */}
				<FText
					font={FFontTypes.Large_Text()}
					color={
						selectedOption === null
							? FColorTypes.PRIMARY_GREY
							: FColorTypes.PRIMARY_BLACK
					}
					style={props.selectedOptionStyle}
					className={
						props.selectedOptionClassName +
						" " +
						styles.FSelectorSelectedOptionDiv
					}
					{...props.selectedOptionProps}
				>
					{selectedOption === null
						? props.showLabelOnly
							? ""
							: placeHolder
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
			className={props.wrapperClassName + " " + styles.FSelectorWrapper}
			ref={FSelectorWithDropdownRef}
		>
			<div
				style={props.selectorContainerStyle}
				className={
					props.selectorContainerClassName +
					" " +
					styles.FSelectorContainer(selectorStyleProps)
				}
			>
				<div
					style={props.contentDivStyle}
					className={
						props.contentDivClassName + " " + styles.FSelectorContentDiv(props)
					}
					onClick={() =>
						props.disabled ? undefined : setOpenDropdown(!openDropdown)
					}
				>
					{props.selectedOptions !== null
						? props.renderCustomizedSelectedOption
							? props.renderCustomizedSelectedOption(props.selectedOptions)
							: props.renderCustomizedOption
							? props.renderCustomizedOption(props.selectedOptions)
							: DefaultSelector(props.selectedOptions)
						: DefaultSelector(null)}
				</div>
				{props.iconComponent ? (
					props.iconComponent
				) : !props.selectedOptions ? (
					<FIcon
						name={FIconTypes.RANKING}
						strokeColor={
							openDropdown
								? FColorTypes.PRIMARY_BLACK
								: FColorTypes.PRIMARY_LIGHT
						}
						size="small"
						onClick={() =>
							props.disabled ? undefined : setOpenDropdown(!openDropdown)
						}
						{...props.dropdownArrowIconProps}
					/>
				) : (
					props.onClear &&
					props.selectedOptions && (
						<FIcon
							name={FIconTypes.CLOSE}
							strokeColor={
								openDropdown
									? FColorTypes.PRIMARY_BLACK
									: FColorTypes.PRIMARY_LIGHT
							}
							size="small"
							onClick={handleClearSelectedOption}
							{...props.clearIconProps}
						/>
					)
				)}
			</div>
			{openDropdown && (
				<div
					style={props.dropdownContainerStyle}
					className={
						props.dropdownContainerClassName +
						" " +
						styles.FSelectorDropdownContainer(
							FSelectorWithDropdownRef,
							openDropdown
						)
					}
				>
					{props.dropdownComponent ?? (
						<FDropdown
							options={props.options}
							selectedOptions={props.selectedOptions}
							onSelect={handleSelectedOption}
							dropdownContainerClassName={props.dropdownContainerClassName}
							dropdownContainerStyle={props.dropdownContainerStyle}
							renderCustomizedOption={props.renderCustomizedOption}
							renderOptionNameOnly={props.renderOptionNameOnly}
							{...props.dropdownProps}
						/>
					)}
				</div>
			)}
		</div>
	);
};
