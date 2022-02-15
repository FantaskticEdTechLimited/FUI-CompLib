import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FIcon, FIconTypes } from "@fantaskticedtechlimited/fui-iconlib";
import React, { useEffect, useRef, useState } from "react";
import { FDropdown } from "../FDropdown";
import { FText } from "../FText";
import { FUseTheme } from "../FThemeContext";
import * as styles from "./styles";
import { FSelectorContainerStyleProps, FSelectorProps } from "./types";

export const FSelector = <T,>(props: FSelectorProps<T>) => {
	const [openDropdown, setOpenDropdown] = useState<boolean>(false);
	const FSelectorWithDropdownRef = useRef<HTMLDivElement>(null);
	const { theme } = FUseTheme();

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
					{props.selectedOptions !== null &&
					props.renderCustomizedSelectedOption ? (
						props.renderCustomizedSelectedOption(props.selectedOptions)
					) : (
						<>
							{/* label */}
							<FText
								font={FFontTypes.Text()}
								color={
									openDropdown
										? theme.mainThemeColor
										: props.selectedOptions
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
									props.selectedOptions === null
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
								{props.selectedOptions === null
									? props.showLabelOnly
										? ""
										: placeHolder
									: props.renderSelectedOptionNameOnly
									? props.renderSelectedOptionNameOnly(props.selectedOptions)
									: (props.selectedOptions as unknown as string)}
							</FText>
						</>
					)}
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
							renderCustomizedOption={props.renderCustomizedSelectedOption}
							{...props.dropdownProps}
						/>
					)}
				</div>
			)}
		</div>
	);
};
