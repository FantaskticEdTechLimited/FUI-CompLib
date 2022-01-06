import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FIcon, FIconTypes } from "@fantaskticedtechlimited/fui-iconlib";
import React, { useEffect, useRef, useState } from "react";
import { FText } from "..";
import { FDropdown } from "../FDropdown";
import * as styles from "./styles";
import { FSelectorProps } from "./type";

export const FSelector = (props: FSelectorProps<any>) => {
	const [openDropdown, setOpenDropdown] = useState<boolean>(false);
	const FSelectorWithDropdownRef = useRef<HTMLDivElement>(null);

	const handleDropdownClose = () => {
		setOpenDropdown(false);
	};

	const handleSelectedOption = async (_selectedOption: any) => {
		await props.onSelect(_selectedOption);
		handleDropdownClose();
	};

	const handleClearSelectedOption = () => {
		if (props.onClear) {
			props.onClear();
		} else {
			props.onSelect(null);
		}
		handleDropdownClose();
	};

	const handleClickOutside = (event: any) => {
		if (
			FSelectorWithDropdownRef.current &&
			!FSelectorWithDropdownRef.current.contains(event.target)
		) {
			handleDropdownClose();
		}
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
					styles.FSelectorContainer(openDropdown)
				}
				onClick={() => setOpenDropdown(!openDropdown)}
			>
				<div
					style={props.contentDivStyle}
					className={
						props.contentDivClassName + " " + styles.FSelectorContentDiv
					}
				>
					{props.selectedOption !== null &&
					props.renderCustomizedSelectedOption ? (
						props.renderCustomizedSelectedOption(props.selectedOption)
					) : (
						<>
							{props.label && (
								<FText
									font={FFontTypes.Text}
									color={FColorTypes.BRAND}
									children={props.label}
									style={props.labelStyle}
									className={props.labelClassName}
								/>
							)}
							<FText
								font={FFontTypes.Large_Text}
								color={
									props.selectedOption === null
										? FColorTypes.GREY
										: FColorTypes.BLACK
								}
								style={props.selectedOptionStyle}
								className={
									props.selectedOptionClassName +
									" " +
									styles.FSelectorSelectedOptionDiv
								}
							>
								{props.selectedOption === null
									? props.placeholder
									: props.renderSelectedOptionNameOnly
									? props.renderSelectedOptionNameOnly(props.selectedOption)
									: props.renderOptionNameOnly
									? props.renderOptionNameOnly(props.selectedOption)
									: props.selectedOption}
							</FText>
						</>
					)}
				</div>
				{props.iconComponent ? (
					props.iconComponent
				) : !props.selectedOption ? (
					<FIcon
						name={FIconTypes.RANKING}
						strokeColor={
							openDropdown ? FColorTypes.BLACK : FColorTypes.LIGHT_GREY
						}
						size="small"
						{...props.dropdownArrowIconProps}
					/>
				) : (
					props.canClear &&
					props.selectedOption && (
						<FIcon
							name={FIconTypes.CLOSE}
							strokeColor={
								openDropdown ? FColorTypes.BLACK : FColorTypes.LIGHT_GREY
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
					{props.dropdownComponent ? (
						<props.dropdownComponent
							options={props.options}
							selectedOption={props.selectedOption}
							onSelect={handleSelectedOption}
							compareSelectedOption={props.compareSelectedOption}
							customizedCompareSelectedOption={
								props.customizedCompareSelectedOption
							}
							renderOptionNameOnly={props.renderOptionNameOnly}
							renderCustomizedOption={props.renderCustomizedOption}
							dropdownContainerClassName={props.dropdownContainerClassName}
							dropdownContainerStyle={props.dropdownContainerStyle}
							optionDivClassName={props.optionDivClassName}
							optionDivStyle={props.optionDivStyle}
							optionTextClassName={props.optionTextClassName}
							optionTextStyle={props.optionTextStyle}
						/>
					) : (
						<FDropdown
							options={props.options}
							selectedOption={props.selectedOption}
							onSelect={handleSelectedOption}
							compareSelectedOption={props.compareSelectedOption}
							customizedCompareSelectedOption={
								props.customizedCompareSelectedOption
							}
							renderOptionNameOnly={props.renderOptionNameOnly}
							renderCustomizedOption={props.renderCustomizedOption}
							dropdownContainerClassName={props.dropdownContainerClassName}
							dropdownContainerStyle={props.dropdownContainerStyle}
							optionDivClassName={props.optionDivClassName}
							optionDivStyle={props.optionDivStyle}
							optionTextClassName={props.optionTextClassName}
							optionTextStyle={props.optionTextStyle}
						/>
					)}
				</div>
			)}
		</div>
	);
};
