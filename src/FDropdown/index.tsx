import { FDropdownOptionDivProps, FDropdownProps } from "./types";
import * as styles from "./styles";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";

import React from "react";
import { FScrollBarStyle, FText, FUseTheme } from "..";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";

export const FDropdown = (props: FDropdownProps<any>) => {
	const { theme } = FUseTheme();
	const compareSelectedOption =
		props.compareSelectedOption ?? props.customizedCompareSelectedOption
			? false
			: true; //default true

	const hideSelectedOptions = props.hideSelectedOptions ?? true;
	const pressCount = props.arrowKeyPressCount ?? 0;

	return (
		<div
			style={props.dropdownContainerStyle}
			className={
				props.dropdownContainerClassName +
				" " +
				styles.FDropdownContainer +
				" " +
				FScrollBarStyle({
					visible: true,
					...props.scrollBarProps,
				})
			}
		>
			{props.options.map((option: any, index: number) => {
				let isSelected = false;
				if (props.selectedOptions) {
					if (compareSelectedOption) {
						if (
							Array.isArray(props.selectedOptions) &&
							props.selectedOptions.length > 1
						) {
							props.selectedOptions.map((selectedoption: any) => {
								if (option === selectedoption) {
									isSelected = true;
									return;
								}
							});
						}
						// if selectedOptions is not an array, or only one
						else {
							if (option === props.selectedOptions) {
								isSelected = true;
								return;
							}
						}
					} else {
						isSelected =
							props.customizedCompareSelectedOption !== undefined &&
							props.customizedCompareSelectedOption(
								option,
								props.selectedOptions
							);
					}
				}
				if (hideSelectedOptions && isSelected) return;

				if (props.renderArrowKeySelectedOption && pressCount - index === 1)
					props.renderArrowKeySelectedOption(option);

				const dropdownOptionDivProps: FDropdownOptionDivProps = {
					pressCount: pressCount,
					index: index,
					isSelected: hideSelectedOptions ? false : isSelected,
					props: props,
					theme: theme,
				};

				return (
					<div
						key={index}
						style={props.optionDivStyle}
						className={
							props.optionDivClassName +
							" " +
							styles.FDropdownOptionDiv(dropdownOptionDivProps)
						}
						onClick={() => {
							props.onSelect && props.onSelect(option, isSelected);
						}}
					>
						{props.renderCustomizedOption ? (
							props.renderCustomizedOption(option, isSelected!)
						) : (
							<FText
								font={FFontTypes.Large_Text()}
								color={
									isSelected ||
									option === null ||
									(option !== null && option.length === 0)
										? FColorTypes.PRIMARY_GREY
										: FColorTypes.PRIMARY_BLACK
								}
								style={
									option !== null && option.length > 0
										? props.optionTextStyle
										: props.emptyOptionTextStyle
								}
								className={
									option !== null && option.length > 0
										? props.optionTextClassName
										: props.emptyOptionTextClassName
								}
								{...(option !== null && option.length > 0
									? props.optionTextProps
									: props.emptyOptionTextProps)}
							>
								{option !== null && option.length > 0
									? props.renderOptionNameOnly
										? props.renderOptionNameOnly(option)
										: option
									: props.emptyOptionHintLabel ?? "No option data"}
							</FText>
						)}
					</div>
				);
			})}
		</div>
	);
};
