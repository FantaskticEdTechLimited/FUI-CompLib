import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib"; 
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FIcon, FIconTypes } from "@fantaskticedtechlimited/fui-iconlib";
import React, { useEffect, useRef, useState } from "react";
import { FText } from "..";
import { FDropdown } from "../FDropdown";
import * as styles from "./styles";
import { FSelectorProps } from "./types";

export const FSelector = (props: FSelectorProps<any>) => {
	const [openDropdown, setOpenDropdown] = useState<boolean>(false);
	const FSelectorWithDropdownRef = useRef<HTMLDivElement>(null);

	const handleSelectedOption = async (
		_selectedOption: any,
		selected: boolean
	) => {
		await props.onSelect(_selectedOption, selected);
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
					styles.FSelectorContainer(openDropdown, props)
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
							<FText
								font={FFontTypes.Text}
								color={
									openDropdown
										? FColorTypes.BRAND
										: props.selectedOptions && props.selectedOptions.length > 0
										? FColorTypes.PRIMARY_BLACK
										: FColorTypes.PRIMARY_GREY
								}
								children={props.label ?? "Title"}
								style={props.labelStyle}
								className={props.labelClassName}
								{...props.labelProps}
							/>
							<FText
								font={FFontTypes.Large_Text}
								color={
									props.selectedOptions === null ||
									props.selectedOptions.length === 0
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
										: props.placeholder ?? "Select an option"
									: props.renderSelectedOptionNameOnly
									? props.renderSelectedOptionNameOnly(props.selectedOptions)
									: props.selectedOptions && props.selectedOptions.length > 0
									? props.selectedOptions
									: props.showLabelOnly
									? ""
									: props.placeholder ?? "Select an option"}
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
							{...props.dropdownProps}
						/>
					)}
				</div>
			)}
		</div>
	);
};
