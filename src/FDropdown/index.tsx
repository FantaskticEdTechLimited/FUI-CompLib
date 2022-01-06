import { FDropdownProps } from "./types";
import * as styles from "./styles";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { FColorTypes } from "@fantaskticedtechlimited/fui-colorlib";
import React from "react";
import { FScrollBarStyle, FText } from "..";

export const FDropdown = (props: FDropdownProps<any>) => {
	return (
		<div
			style={props.dropdownContainerStyle}
			className={
				props.dropdownContainerClassName +
				" " +
				styles.FDropdownContainer +
				" " +
				FScrollBarStyle({ visible: true })
			}
		>
			{props.options.map((option: any, index: number) => {
				const isSelected = props.compareSelectedOption
					? option === props.selectedOption
					: props.customizedCompareSelectedOption &&
					  props.customizedCompareSelectedOption(option, props.selectedOption);

				return (
					<div
						key={index}
						style={props.optionDivStyle}
						className={
							props.optionDivClassName +
							" " +
							styles.FDropdownOptionDiv(isSelected!)
						}
						onClick={() => {
							props.onSelect(option);
						}}
					>
						{props.renderCustomizedOption ? (
							props.renderCustomizedOption(option, isSelected!)
						) : (
							<FText
								font={FFontTypes.Large_Text}
								color={isSelected ? FColorTypes.GREY : FColorTypes.BLACK}
								style={props.optionTextStyle}
								className={props.optionTextClassName}
							>
								{props.renderOptionNameOnly
									? props.renderOptionNameOnly(option)
									: option}
							</FText>
						)}
					</div>
				);
			})}
		</div>
	);
};
