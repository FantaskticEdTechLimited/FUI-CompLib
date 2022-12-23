import { FDropdownOptionDivProps, FDropdownProps } from "./types";
import { dropdownContainer, dropdownOptionDiv } from "./styles";
import { FFontTypes } from "@innoplus-studio/fui-fontlib";
import React from "react";
import { FScrollBarStyle } from "../FScrollBarStyle";
import { FText } from "../FText";
import { FJoinClassNames, FReturnArray, FReturnColor } from "..";

/**
 * `<FDropdown />` is a component which returns a dropdown menu listing options.
 *
 * Props: `FDropdownProps`.
 */
export const FDropdown = <T,>(props: FDropdownProps<T>) => {
	const {
		hideSelectedOptions = true,
		arrowKeyPressCount = 0,
		selectedOptions,
		style,
		optionDivStyle,
		className,
		optionDivClassName,
		options,
		customOption,
		onSelect,
		onOptionCompare,
		renderArrowKeySelectedOption,
		renderOptionNameOnly,
		warningLabel = "No option data",
		optionTextProps,
		warningLabelProps,
		scrollBarProps,
	} = props;
	const selectedOptionsArray = FReturnArray(selectedOptions);

	return (
		<div
			style={style}
			className={FJoinClassNames([
				dropdownContainer(),
				className,
				FScrollBarStyle({ ...scrollBarProps }),
			])}
		>
			{options.map((option: T, index: number) => {
				let isString = typeof option === "string";
				let isSelected = selectedOptionsArray.find((e) => {
					onOptionCompare ? onOptionCompare(e, option) : false;
				})
					? true
					: false;
				if (hideSelectedOptions && isSelected) return;
				if (option === null) return;

				if (renderArrowKeySelectedOption && arrowKeyPressCount - index === 1)
					renderArrowKeySelectedOption(option);

				const dropdownOptionDivProps: FDropdownOptionDivProps = {
					pressCount: arrowKeyPressCount,
					index: index,
					isSelected: hideSelectedOptions ? false : isSelected,
					props: props,
				};

				return (
					<div
						key={index}
						style={optionDivStyle}
						className={FJoinClassNames([
							dropdownOptionDiv(dropdownOptionDivProps),
							optionDivClassName,
						])}
						onClick={() => {
							onSelect && onSelect(option);
						}}
					>
						{customOption ? (
							customOption(option, isSelected!)
						) : (
							<FText
								font={FFontTypes.Text()}
								color={
									isSelected
										? FReturnColor({ color: "Grey" })
										: FReturnColor({ color: "Black" })
								}
								{...(option !== null ? optionTextProps : warningLabelProps)}
							>
								{renderOptionNameOnly
									? renderOptionNameOnly(option)
									: isString
									? (option as unknown as string)
									: warningLabel}
							</FText>
						)}
					</div>
				);
			})}
		</div>
	);
};
