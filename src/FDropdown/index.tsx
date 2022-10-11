import { FDropdownOptionDivProps, FDropdownProps } from "./types";
import * as styles from "./styles";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import React from "react";
import { FScrollBarStyle } from "../FScrollBarStyle";
import { FText } from "../FText";
import { FAutoConvertArray, FUseColor } from "..";

export const FDropdown = <T extends unknown>(props: FDropdownProps<T>) => {
	const hideSelectedOptions = props.hideSelectedOptions ?? true;
	const pressCount = props.arrowKeyPressCount ?? 0;
	const selectedOptionsArray = FAutoConvertArray(props.selectedOptions);

	return (
		<div
			style={props.dropdownContainerStyle}
			className={
				styles.FDropdownContainer() +
				" " +
				props.dropdownContainerClassName +
				" " +
				FScrollBarStyle({
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
				if (hideSelectedOptions && isSelected) return;
				if (option === null) return;

				if (props.renderArrowKeySelectedOption && pressCount - index === 1)
					props.renderArrowKeySelectedOption(option);

				const dropdownOptionDivProps: FDropdownOptionDivProps = {
					pressCount: pressCount,
					index: index,
					isSelected: hideSelectedOptions ? false : isSelected,
					props: props,
				};

				return (
					<div
						key={index}
						style={props.optionDivStyle}
						className={
							styles.FDropdownOptionDiv(dropdownOptionDivProps) +
							" " +
							props.optionDivClassName
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
										? FUseColor({ colorName: "Grey" })
										: FUseColor({ colorName: "Black" })
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
