import { FUseColor } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FIcon, FIconNames } from "@fantaskticedtechlimited/fui-iconlib";
import React, { useEffect, useRef, useState } from "react";
import { FText, FDropdown, FGetThemeColor, FCheckIsDarkMode } from "..";
import * as styles from "./styles";
import { FSelectContainerStyleProps, FSelectProps } from "./types";

export const FSelect = <T,>(props: FSelectProps<T>) => {
	const [openDropdown, setOpenDropdown] = useState<boolean>(false);
	const FSelectWithDropdownRef = useRef<HTMLDivElement>(null);
	const blackColor = FUseColor({
		colorName: "Black",
		isDarkMode: FCheckIsDarkMode(),
	});
	const greyColor = FUseColor({
		colorName: "Grey",
		isDarkMode: FCheckIsDarkMode(),
	});
	const bgLightColor = FUseColor({
		colorName: "BG Light",
		isDarkMode: FCheckIsDarkMode(),
	});

	const selectorStyleProps: FSelectContainerStyleProps<T> = {
		isClicked: openDropdown,
		disabled: props.disabled!,
		selectedOptions: props.selectedOptions,
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
				{/* label */}
				<FText
					font={FFontTypes.Text()}
					color={
						openDropdown
							? FGetThemeColor("Main")
							: selectedOption
							? blackColor
							: greyColor
					}
					children={props.label ?? "Title"}
					style={props.labelStyle}
					className={props.labelClassName}
					{...props.labelProps}
				/>
				{/* Content or placeHolder */}
				<FText
					font={FFontTypes.Large_Text()}
					color={selectedOption === null ? greyColor : blackColor}
					style={props.selectedOptionStyle}
					className={
						styles.FSelectSelectedOptionDiv +
						" " +
						props.selectedOptionClassName
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
			className={styles.FSelectWrapper + " " + props.wrapperClassName}
			ref={FSelectWithDropdownRef}
		>
			<div
				style={props.selectorContainerStyle}
				className={
					styles.FSelectContainer(selectorStyleProps) +
					" " +
					props.selectorContainerClassName
				}
			>
				<div
					style={props.contentDivStyle}
					className={
						styles.FSelectContentDiv(props) + " " + props.contentDivClassName
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
						name={FIconNames.RANKING}
						strokeColor={openDropdown ? blackColor : bgLightColor}
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
							name={FIconNames.CLOSE}
							strokeColor={openDropdown ? blackColor : bgLightColor}
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
						styles.FSelectDropdownContainer(
							FSelectWithDropdownRef,
							openDropdown
						) +
						" " +
						props.dropdownContainerClassName
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
