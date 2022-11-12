import { FTagInputFieldProps } from "./types";
import {
	styles,
	FTagInputFieldWrapper,
	FTagInputFieldDropdownContainer,
	FTagInputFieldDropdownOptionDiv,
	FTagInputFieldInputDiv,
	FTagInputFieldInputContainer,
	FTagInputFieldTagsDisplayDiv,
} from "./styles";
import { FTag } from "../FTag";
import { useEffect, useRef, useState } from "react";
import { FIcon, FIconNames } from "@innoplus-studio/fui-iconlib";
import { FDropdown } from "../FDropdown";
import { FFontTypes } from "@innoplus-studio/fui-fontlib";
import React from "react";
import { FScrollBarStyle, FText, FReturnColor } from "..";

/**
 * `<FTagInputField />` is a component for _tag input_ only.
 *
 * Props: `FTagInputFieldProps`.
 */
export const FTagInputField = <T extends unknown>({
	disableDropdown = false,
	disableFilteredTags = false,
	disabled = false,
	placeholder = "Input Tags",
	value = "",
	vertical = false,
	...props
}: FTagInputFieldProps<T>) => {
	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const [filteredTagData, setFilteredTagData] = useState<any[]>([]);
	const [arrowKeyPressCount, setArrowKeyPressCount] = useState<number>(0);
	const [arrowKeySelectedOption, setArrowKeySelectedOption] =
		useState<string>("");
	const inputRef = useRef<HTMLInputElement>(null);
	const inputContainerRef = useRef<HTMLDivElement>(null);
	const newTagHintLabel =
		(props.tagHintLabels && props.tagHintLabels.newTag) ?? "Create this tag";
	const selectedTagHintLabel =
		(props.tagHintLabels && props.tagHintLabels.selectedTag) ??
		"Error: Tag already exists.";
	const isExisted = filteredTagData[0] === selectedTagHintLabel;
	const param: Partial<FTagInputFieldProps<T>> = {
		disableDropdown: disableDropdown,
		disableFilteredTags: disableFilteredTags,
		disabled: disabled,
		placeholder: placeholder,
		value: value,
		vertical: vertical,
		...props,
	};

	const checkDataExist = (datas: T[], newData: string) => {
		return datas.includes(newData as T);
	};

	useEffect(() => {
		if (isTriggered && inputRef.current) inputRef.current.focus();
	}, [isTriggered]);

	useEffect(() => {
		let tempFilteredTagData: any[] = [];
		if (!disableFilteredTags) {
			if (props.data && value && value.length > 0) {
				props.data.map((tag: any) => {
					if (props.selectedTags) {
						if (props.selectedTags.length === 0) {
							if (tag.includes(value)) {
								tempFilteredTagData.push(tag);
							}
						} else {
							if (tag.includes(value)) {
								props.selectedTags.map((selectedTag: any, i: number) => {
									if (
										tag !== selectedTag &&
										props.selectedTags &&
										i + 1 >= props.selectedTags.length
									) {
										tempFilteredTagData.push(tag);
									}
								});
							}
							tempFilteredTagData.filter(
								(item, index) => tempFilteredTagData.indexOf(item) !== index
							);
						}
					}
				});
				if (props.selectedTags) {
					if (!checkDataExist(props.selectedTags, value)) {
						tempFilteredTagData.push(newTagHintLabel);
						props.renderFilteredTagResult &&
							props.renderFilteredTagResult(true);
					} else {
						tempFilteredTagData = [];
						tempFilteredTagData.push(selectedTagHintLabel);
						props.renderFilteredTagResult &&
							props.renderFilteredTagResult(false);
					}
				}
			}
			setFilteredTagData(tempFilteredTagData);
		}
	}, [disableFilteredTags, props.data, value, props.selectedTags]);

	useEffect(() => {
		if (arrowKeyPressCount > 0 && inputRef.current && value) {
			inputRef.current.selectionEnd = value.length;
			inputRef.current.selectionStart = value.length;
		}
	}, [arrowKeyPressCount]);

	useEffect(() => {
		if (value && value.length > 0) setArrowKeyPressCount(0);
	}, [value]);

	return (
		<div
			style={props.style}
			className={
				FTagInputFieldWrapper(param) +
				" " +
				props.className +
				" " +
				FScrollBarStyle({ ...props.scrollBarProps })
			}
		>
			<div
				style={props.tagsDisplayDivStyle}
				className={
					FTagInputFieldTagsDisplayDiv(vertical) +
					" " +
					props.tagsDisplayDivClassName
				}
			>
				{props.customTagComponent
					? props.customTagComponent
					: props.selectedTags &&
					  props.selectedTags.map((selectedTag, i) => {
							let tagId = (selectedTag as any).id ?? i.toString();
							return (
								<FTag
									key={i}
									tag={selectedTag}
									label={(selectedTag as any).name}
									labelProps={{
										style: () => ({ whiteSpace: "nowrap" }),
									}}
									onDelete={() => props.onTagDelete && props.onTagDelete(tagId)}
									{...props.tagProps}
								/>
							);
					  })}
			</div>
			<div
				style={props.inputWrapperStyle}
				className={
					styles.FTagInputFieldWrapper + " " + props.inputWrapperClassName
				}
			>
				<div
					style={props.inputContainerStyle}
					className={
						FTagInputFieldInputContainer(isTriggered) +
						" " +
						props.inputContainerClassName
					}
					onClick={() => {
						if (!disabled) {
							setArrowKeyPressCount(0);
							setIsTriggered(true);
						}
					}}
					onBlur={() => !isExisted && setIsTriggered(false)}
					ref={inputContainerRef}
				>
					<input
						style={props.inputDivStyle}
						className={
							FTagInputFieldInputDiv(value) + " " + props.inputDivClassName
						}
						type="text"
						ref={inputRef}
						value={value}
						placeholder={placeholder}
						onKeyDown={(event: any) => {
							if (event.key === "ArrowDown") {
								if (disableFilteredTags) {
									if (props.data && arrowKeyPressCount + 1 > props.data.length)
										setArrowKeyPressCount(1);
									else setArrowKeyPressCount(arrowKeyPressCount + 1);
								} else {
									if (
										filteredTagData &&
										arrowKeyPressCount + 1 > filteredTagData.length
									)
										setArrowKeyPressCount(1);
									else setArrowKeyPressCount(arrowKeyPressCount + 1);
								}
							}
							if (event.key === "ArrowUp") {
								if (disableFilteredTags) {
									if (props.data && arrowKeyPressCount - 1 <= 0)
										setArrowKeyPressCount(props.data.length);
									else setArrowKeyPressCount(arrowKeyPressCount - 1);
								} else {
									if (filteredTagData && arrowKeyPressCount - 1 <= 0)
										setArrowKeyPressCount(filteredTagData.length);
									else setArrowKeyPressCount(arrowKeyPressCount - 1);
								}
							}

							if (event.key === "Enter") {
								let bool = false;
								if (arrowKeyPressCount === 0) {
									if (
										props.selectedTags &&
										props.selectedTags.length > 0 &&
										value &&
										value.length > 0
									) {
										props.selectedTags.map((selectedTag: any, i: number) => {
											if (value === selectedTag) bool = true;
											if (
												!bool &&
												props.selectedTags &&
												i + 1 >= props.selectedTags.length &&
												value !== selectedTag &&
												value !== selectedTagHintLabel &&
												value !== newTagHintLabel
											) {
												props.onTagCreate && props.onTagCreate(value!);
												props.onInput && props.onInput("");
											}
										});
									} else {
										if (
											value !== selectedTagHintLabel &&
											value !== newTagHintLabel
										) {
											props.onTagCreate && props.onTagCreate(value!);
											props.onInput && props.onInput("");
										}
									}
								} else {
									if (
										!disableFilteredTags &&
										value &&
										value.length > 0 &&
										arrowKeySelectedOption !== selectedTagHintLabel &&
										arrowKeySelectedOption !== newTagHintLabel &&
										props.onTagCreate
									) {
										props.onTagCreate(arrowKeySelectedOption);
										props.onInput && props.onInput("");
									} else {
										if (
											value &&
											value.length > 0 &&
											value !== selectedTagHintLabel &&
											value !== newTagHintLabel &&
											props.selectedTags &&
											props.selectedTags.length > 0 &&
											arrowKeySelectedOption !== selectedTagHintLabel
										)
											props.selectedTags.map((selectedTag: any, i: number) => {
												if (arrowKeySelectedOption === selectedTag) bool = true;
												if (
													!bool &&
													props.selectedTags &&
													i + 1 >= props.selectedTags.length &&
													value !== selectedTag &&
													props.onTagCreate
												) {
													if (arrowKeySelectedOption === newTagHintLabel)
														props.onTagCreate(value!);
													else props.onTagCreate(arrowKeySelectedOption);
													props.onInput && props.onInput("");
												}
											});
									}
								}
							}
						}}
						onChange={(event: any) => {
							props.onInput && props.onInput(event.target.value);
						}}
					/>
					{value && value.length > 0 && (
						<FIcon
							size="small"
							name={FIconNames.CLOSE}
							onClick={() => props.onInput && props.onInput("")}
							{...props.clearIconProps}
						/>
					)}
				</div>
				{value && value.length > 0 && (
					<div className={FTagInputFieldDropdownContainer(inputContainerRef)}>
						{!disableDropdown
							? props.customDropdown ?? (
									<FDropdown
										options={
											disableFilteredTags ? props.data! : filteredTagData
										}
										selectedOptions={props.selectedTags}
										onSelect={(option: any) => {
											setIsTriggered(true);
											props.onTagCreate && props.onTagCreate(option);
										}}
										arrowKeyPressCount={arrowKeyPressCount}
										hideSelectedOptions={!disableFilteredTags}
										renderArrowKeySelectedOption={(option: any) => {
											setTimeout(() => setArrowKeySelectedOption(option), 0);
										}}
										customOption={(option: any, selected: boolean) => (
											<FText
												font={FFontTypes.Large_Text()}
												color={() =>
													option === newTagHintLabel
														? FReturnColor({ color: "Grey" })
														: option === selectedTagHintLabel
														? FReturnColor({ color: "Red" })
														: FReturnColor({ color: "Black" })
												}
												className={() =>
													FTagInputFieldDropdownOptionDiv(
														selected,
														option === newTagHintLabel,
														option === selectedTagHintLabel
													)
												}
												children={option}
											/>
										)}
										{...props.dropdownProps}
									/>
							  )
							: null}
					</div>
				)}
			</div>
		</div>
	);
};
