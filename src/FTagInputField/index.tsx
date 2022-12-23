import { FTagInputFieldProps } from "./types";
import {
	styles,
	tagInputFieldWrapper,
	dropdownContainer,
	dropdownOptionDiv,
	inputDiv,
	inputContainer,
	tagsDisplayDiv,
} from "./styles";
import { FTag } from "../FTag";
import { useEffect, useRef, useState } from "react";
import { FIcon, FIconNames } from "@innoplus-studio/fui-iconlib";
import { FDropdown } from "../FDropdown";
import { FFontTypes } from "@innoplus-studio/fui-fontlib";
import React from "react";
import { FScrollBarStyle, FText, FReturnColor, FJoinClassNames } from "..";

/**
 * `<FTagInputField />` is a component for _tag input_ only.
 *
 * Props: `FTagInputFieldProps`.
 */
export const FTagInputField = <T,>(props: FTagInputFieldProps<T>) => {
	const {
		data,
		selectedTags,
		disableDropdown = false,
		disableFilteredTags = false,
		disabled = false,
		placeholder = "Input Tags",
		value = "",
		vertical = false,
		style,
		inputDivStyle,
		inputWrapperStyle,
		inputContainerStyle,
		tagsDisplayDivStyle,
		className,
		inputDivClassName,
		inputWrapperClassName,
		inputContainerClassName,
		tagsDisplayDivClassName,
		tagProps,
		dropdownProps,
		clearIconProps,
		scrollBarProps,
		onInput,
		onTagCreate,
		onTagDelete,
		renderFilteredTagResult,
		tagHintLabels,
		customTagComponent,
		customDropdown,
	} = props;

	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const [filteredTagData, setFilteredTagData] = useState<any[]>([]);
	const [arrowKeyPressCount, setArrowKeyPressCount] = useState<number>(0);
	const [arrowKeySelectedOption, setArrowKeySelectedOption] =
		useState<string>("");
	const inputRef = useRef<HTMLInputElement>(null);
	const inputContainerRef = useRef<HTMLDivElement>(null);
	const newTagHintLabel =
		(tagHintLabels && tagHintLabels.newTag) ?? "Create this tag";
	const selectedTagHintLabel =
		(tagHintLabels && tagHintLabels.selectedTag) ??
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
		return datas.includes(newData as unknown as T);
	};

	useEffect(() => {
		if (isTriggered && inputRef.current) inputRef.current.focus();
	}, [isTriggered]);

	useEffect(() => {
		let tempFilteredTagData: any[] = [];
		if (!disableFilteredTags) {
			if (data && value && value.length > 0) {
				data.map((tag: any) => {
					if (selectedTags) {
						if (selectedTags.length === 0) {
							if (tag.includes(value)) {
								tempFilteredTagData.push(tag);
							}
						} else {
							if (tag.includes(value)) {
								selectedTags.map((selectedTag: any, i: number) => {
									if (
										tag !== selectedTag &&
										selectedTags &&
										i + 1 >= selectedTags.length
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
				if (selectedTags) {
					if (!checkDataExist(selectedTags, value)) {
						tempFilteredTagData.push(newTagHintLabel);
						renderFilteredTagResult && renderFilteredTagResult(true);
					} else {
						tempFilteredTagData = [];
						tempFilteredTagData.push(selectedTagHintLabel);
						renderFilteredTagResult && renderFilteredTagResult(false);
					}
				}
			}
			setFilteredTagData(tempFilteredTagData);
		}
	}, [disableFilteredTags, data, value, selectedTags]);

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
			style={style}
			className={FJoinClassNames([
				tagInputFieldWrapper(param),
				className,
				FScrollBarStyle({ ...scrollBarProps }),
			])}
		>
			<div
				style={tagsDisplayDivStyle}
				className={FJoinClassNames([
					tagsDisplayDiv(vertical),
					tagsDisplayDivClassName,
				])}
			>
				{customTagComponent ??
					selectedTags?.map((selectedTag, i) => {
						let tagId = (selectedTag as any).id ?? i.toString();
						return (
							<FTag
								key={i}
								tag={selectedTag}
								label={(selectedTag as any).name}
								labelProps={{
									style: { whiteSpace: "nowrap" },
								}}
								onDelete={() => onTagDelete && onTagDelete(tagId)}
								{...tagProps}
							/>
						);
					})}
			</div>
			<div
				style={inputWrapperStyle}
				className={FJoinClassNames([
					styles.inputWrapper,
					inputWrapperClassName,
				])}
			>
				<div
					style={inputContainerStyle}
					className={FJoinClassNames([
						inputContainer(isTriggered),
						inputContainerClassName,
					])}
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
						style={inputDivStyle}
						className={FJoinClassNames([inputDiv(value), inputDivClassName])}
						type="text"
						ref={inputRef}
						value={value}
						placeholder={placeholder}
						onKeyDown={(event: any) => {
							if (event.key === "ArrowDown") {
								if (disableFilteredTags) {
									if (data && arrowKeyPressCount + 1 > data.length)
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
									if (data && arrowKeyPressCount - 1 <= 0)
										setArrowKeyPressCount(data.length);
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
										selectedTags &&
										selectedTags.length > 0 &&
										value &&
										value.length > 0
									) {
										selectedTags.map((selectedTag: any, i: number) => {
											if (value === selectedTag) bool = true;
											if (
												!bool &&
												selectedTags &&
												i + 1 >= selectedTags.length &&
												value !== selectedTag &&
												value !== selectedTagHintLabel &&
												value !== newTagHintLabel
											) {
												onTagCreate && onTagCreate(value!);
												onInput && onInput("");
											}
										});
									} else {
										if (
											value !== selectedTagHintLabel &&
											value !== newTagHintLabel
										) {
											onTagCreate && onTagCreate(value!);
											onInput && onInput("");
										}
									}
								} else {
									if (
										!disableFilteredTags &&
										value &&
										value.length > 0 &&
										arrowKeySelectedOption !== selectedTagHintLabel &&
										arrowKeySelectedOption !== newTagHintLabel &&
										onTagCreate
									) {
										onTagCreate(arrowKeySelectedOption);
										onInput && onInput("");
									} else {
										if (
											value &&
											value.length > 0 &&
											value !== selectedTagHintLabel &&
											value !== newTagHintLabel &&
											selectedTags &&
											selectedTags.length > 0 &&
											arrowKeySelectedOption !== selectedTagHintLabel
										)
											selectedTags.map((selectedTag: any, i: number) => {
												if (arrowKeySelectedOption === selectedTag) bool = true;
												if (
													!bool &&
													selectedTags &&
													i + 1 >= selectedTags.length &&
													value !== selectedTag &&
													onTagCreate
												) {
													if (arrowKeySelectedOption === newTagHintLabel)
														onTagCreate(value!);
													else onTagCreate(arrowKeySelectedOption);
													onInput && onInput("");
												}
											});
									}
								}
							}
						}}
						onChange={(event: any) => {
							onInput && onInput(event.target.value);
						}}
					/>
					{value && value.length > 0 && (
						<FIcon
							size="small"
							name={FIconNames.CLOSE}
							onClick={() => onInput && onInput("")}
							{...clearIconProps}
						/>
					)}
				</div>
				{value && value.length > 0 && (
					<div className={dropdownContainer(inputContainerRef)}>
						{!disableDropdown ? (
							customDropdown ? (
								customDropdown
							) : (
								<FDropdown
									options={disableFilteredTags ? data! : filteredTagData}
									selectedOptions={selectedTags}
									onSelect={(option: any) => {
										setIsTriggered(true);
										onTagCreate && onTagCreate(option);
									}}
									arrowKeyPressCount={arrowKeyPressCount}
									hideSelectedOptions={!disableFilteredTags}
									renderArrowKeySelectedOption={(option: any) => {
										setTimeout(() => setArrowKeySelectedOption(option), 0);
									}}
									customOption={(option: any, selected: boolean) => (
										<FText
											font={FFontTypes.Large_Text()}
											color={
												option === newTagHintLabel
													? FReturnColor({ color: "Grey" })
													: option === selectedTagHintLabel
													? FReturnColor({ color: "Red" })
													: FReturnColor({ color: "Black" })
											}
											className={dropdownOptionDiv(
												selected,
												option === newTagHintLabel,
												option === selectedTagHintLabel
											)}
											children={option}
										/>
									)}
									{...dropdownProps}
								/>
							)
						) : null}
					</div>
				)}
			</div>
		</div>
	);
};
