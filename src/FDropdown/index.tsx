import { FDropdownOptionDivProps, FDropdownProps } from "./types";
import * as styles from "./styles";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import React from "react";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import { useFUITheme } from "../FThemeContext";
import { FScrollBarStyle } from "../FScrollBar";
import { FText } from "../FText";
import { FAutoConvertArray } from "..";
export const FDropdown = <T,>(props: FDropdownProps<T>) => {
	const { theme } = useFUITheme();
	const hideSelectedOptions = props.hideSelectedOptions ?? true;
	const pressCount = props.arrowKeyPressCount ?? 0;
	const selectedOptionsArray = FAutoConvertArray(props.selectedOptions);
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
			{props.options.map((option: T, index: number) => {
				let isString = typeof option === "string";
				let isSelected = selectedOptionsArray.find((e) => {
					props.onOptionCompare ? props.onOptionCompare(e, option) : false;
				})
					? true
					: false;

				// if (props.selectedOptions) {
				// 	if (compareSelectedOption) {
				// 		if (
				// 			Array.isArray(props.selectedOptions) &&
				// 			props.selectedOptions.length > 1
				// 		) {
				// 			props.selectedOptions.map((selectedoption: any) => {
				// 				if (option === selectedoption) {
				// 					isSelected = true;
				// 					return;
				// 				}
				// 			});
				// 		}
				// 		// if selectedOptions is not an array, or only one
				// 		else {
				// 			if (option === props.selectedOptions) {
				// 				isSelected = true;
				// 				return;
				// 			}
				// 		}
				// 	} else {
				// 		isSelected =
				// 			props.onOptionCompare !== undefined &&
				// 			props.onOptionCompare(
				// 				option,
				// 				props.selectedOptions
				// 			);
				// 	}
				// }
				if (hideSelectedOptions && isSelected) return;
				if (option === null) return;

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
							props.onSelect && props.onSelect(option);
						}}
					>
						{props.renderCustomizedOption ? (
							props.renderCustomizedOption(option, isSelected!)
						) : (
							<FText
								font={FFontTypes.Text()}
								color={
									isSelected
										? FColorTypes.PRIMARY_GREY
										: FColorTypes.PRIMARY_BLACK
								}
								style={props.optionTextStyle}
								className={props.optionTextClassName}
								{...(option !== null
									? props.optionTextProps
									: props.emptyOptionTextProps)}
							>
								{props.renderOptionNameOnly
									? props.renderOptionNameOnly(option)
									: isString
									? (option as unknown as string)
									: props.emptyOptionHintLabel ?? "No option data"}
							</FText>
						)}
					</div>
				);
			})}
		</div>
	);
};
