import { FDropdownOptionDivProps, FDropdownProps } from "./types";
import * as styles from "./styles";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import React from "react";
import { FScrollBarStyle } from "../FScrollBarStyle";
import { FText } from "../FText";
import { FReturnArray, FReturnColor } from "..";

/**
 * `<FDropdown />` is a component which returns a dropdown menu listing options.
 *
 * Props: `FDropdownProps`.
 */
export const FDropdown = <T extends unknown>(props: FDropdownProps<T>) => {
	const hideSelectedOptions = props.hideSelectedOptions ?? true;
	const pressCount = props.arrowKeyPressCount ?? 0;
	const selectedOptionsArray = FReturnArray(props.selectedOptions);

	return (
		<div
			style={props.style}
			className={
				styles.FDropdownContainer() +
				" " +
				props.className +
				" " +
				FScrollBarStyle({ ...props.scrollBarProps })
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
						{props.customOption ? (
							props.customOption(option, isSelected!)
						) : (
							<FText
								font={FFontTypes.Text()}
								color={() =>
									isSelected
										? FReturnColor({ color: "Grey" })
										: FReturnColor({ color: "Black" })
								}
								{...(option !== null
									? props.optionTextProps
									: props.warningLabelProps)}
							>
								{props.renderOptionNameOnly
									? props.renderOptionNameOnly(option)
									: isString
									? (option as unknown as string)
									: props.warningLabel ?? "No option data"}
							</FText>
						)}
					</div>
				);
			})}
		</div>
	);
};
