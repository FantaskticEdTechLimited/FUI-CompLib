import { FTagInputFieldProps } from "./types";
import * as styles from "./styles";
import { FTag } from "../FTag";
import { useEffect, useRef, useState } from "react";
import { FIcon, FIconNames } from "@fantaskticedtechlimited/fui-iconlib";
import { FDropdown } from "../FDropdown";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import React from "react";
import { FScrollBarStyle, FText, FUseColor } from "..";

export const FTagInputField = <T extends unknown>(
	props: FTagInputFieldProps<T>
) => {
	const [isTriggered, setIsTriggered] = useState<boolean>(false);
	const [filteredTagData, setFilteredTagData] = useState<any[]>([]);
	const [arrowKeyPressCount, setArrowKeyPressCount] = useState<number>(0);
	const [arrowKeySelectedOption, setArrowKeySelectedOption] =
		useState<string>("");

	// Ref
	const inputRef = useRef<HTMLInputElement>(null);
	const inputContainerRef = useRef<HTMLDivElement>(null);

	// const value
	const NewTagHintLabel =
		(props.tagHintLabels && props.tagHintLabels.newTagHintLabel) ??
		"Create this tag";
	const ExitsedTagHintLabel =
		(props.tagHintLabels && props.tagHintLabels.existedTagHintLabel) ??
		"Error: Tag already exists.";
	const isExisted = filteredTagData[0] === ExitsedTagHintLabel;

	// compare method
	const checkDataExist = (datas: T[], newData: string) => {
		return datas.includes(newData as T);
		// return datas.find((e) => {
		// 	props.onTagCompare ? props.onTagCompare(e, newData) : e === newData;
		// })
		// 	? true
		// 	: false;
	};

	useEffect(() => {
		if (isTriggered && inputRef.current) inputRef.current.focus();
	}, [isTriggered]);

	useEffect(() => {
		let tempFilteredTagData: any[] = [];
		if (!props.disableFilteredTags) {
			if (props.tagData && props.value && props.value.length > 0) {
				props.tagData.map((tag: any) => {
					if (props.selectedTags) {
						if (props.selectedTags.length === 0) {
							if (tag.includes(props.value)) {
								tempFilteredTagData.push(tag);
							}
						} else {
							if (tag.includes(props.value)) {
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
				// no matter there are selectedTag tags
				if (props.selectedTags) {
					if (!checkDataExist(props.selectedTags, props.value)) {
						tempFilteredTagData.push(NewTagHintLabel);
						props.renderFilteredTagResult &&
							props.renderFilteredTagResult({ new: true });
					} else {
						tempFilteredTagData = [];
						tempFilteredTagData.push(ExitsedTagHintLabel);
						props.renderFilteredTagResult &&
							props.renderFilteredTagResult({ existed: true });
					}
				}
			}
			setFilteredTagData(tempFilteredTagData);
		}
	}, [
		props.disableFilteredTags,
		props.tagData,
		props.value,
		props.selectedTags,
	]);

	useEffect(() => {
		if (arrowKeyPressCount > 0 && inputRef.current && props.value) {
			inputRef.current.selectionEnd = props.value.length;
			inputRef.current.selectionStart = props.value.length;
		}
	}, [arrowKeyPressCount]);

	useEffect(() => {
		if (props.value && props.value.length > 0) setArrowKeyPressCount(0);
	}, [props.value]);

	return (
		<div
			style={props.containerStyle}
			className={
				styles.FTagInputFieldContainer(props) +
				" " +
				props.containerClassName +
				" " +
				FScrollBarStyle({
					...props.scrollBarProps,
				})
			}
		>
			<div
				style={props.tagsDisplayDivStyle}
				className={
					styles.FTagInputFieldTagsDisplayDiv(props.flexColumn!) +
					" " +
					props.tagsDisplayDivClassName
				}
			>
				{props.renderCustomizedTagComponents
					? props.renderCustomizedTagComponents
					: props.selectedTags &&
					  props.selectedTags.map((selectedTag: any, i: number) => {
							let tagId = selectedTag.id ?? i.toString();
							return (
								<FTag
									key={i}
									tag={selectedTag}
									label={selectedTag}
									labelStyle={{
										whiteSpace: "nowrap",
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
						styles.FTagInputFieldInputContainer(isTriggered) +
						" " +
						props.inputContainerClassName
					}
					onClick={() => {
						if (!props.disabled) {
							setArrowKeyPressCount(0);
							setIsTriggered(true);
						}
					}}
					onBlur={() => !isExisted && setIsTriggered(false)}
					ref={inputContainerRef}
				>
					<input
						style={props.inputAreaStyle}
						className={
							styles.FTagInputFieldInputAreaDiv(props) +
							" " +
							props.inputAreaClassName
						}
						type="text"
						ref={inputRef}
						value={props.value ?? ""}
						placeholder={props.placeholder ?? "Input Tags"}
						onKeyDown={(event: any) => {
							if (event.key === "ArrowDown") {
								if (props.disableFilteredTags) {
									if (
										props.tagData &&
										arrowKeyPressCount + 1 > props.tagData.length
									)
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
								if (props.disableFilteredTags) {
									if (props.tagData && arrowKeyPressCount - 1 <= 0)
										setArrowKeyPressCount(props.tagData.length);
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
									// does not use dropdown
									if (
										props.selectedTags &&
										props.selectedTags.length > 0 &&
										props.value &&
										props.value.length > 0
									) {
										props.selectedTags.map((selectedTag: any, i: number) => {
											if (props.value === selectedTag) bool = true;
											if (
												!bool &&
												props.selectedTags &&
												i + 1 >= props.selectedTags.length &&
												props.value !== selectedTag &&
												props.value !== ExitsedTagHintLabel &&
												props.value !== NewTagHintLabel
											) {
												props.onTagCreate && props.onTagCreate(props.value!);
												props.onInput && props.onInput("");
											}
										});
									} else {
										if (
											props.value !== ExitsedTagHintLabel &&
											props.value !== NewTagHintLabel
										) {
											props.onTagCreate && props.onTagCreate(props.value!);
											props.onInput && props.onInput("");
										}
									}
								} else {
									// use dropdown with arrow keys
									if (
										!props.disableFilteredTags &&
										props.value &&
										props.value.length > 0 &&
										arrowKeySelectedOption !== ExitsedTagHintLabel &&
										arrowKeySelectedOption !== NewTagHintLabel &&
										props.onTagCreate
									) {
										props.onTagCreate(arrowKeySelectedOption);
										props.onInput && props.onInput("");
									} else {
										if (
											props.value &&
											props.value.length > 0 &&
											props.value !== ExitsedTagHintLabel &&
											props.value !== NewTagHintLabel &&
											props.selectedTags &&
											props.selectedTags.length > 0 &&
											arrowKeySelectedOption !== ExitsedTagHintLabel
										)
											props.selectedTags.map((selectedTag: any, i: number) => {
												if (arrowKeySelectedOption === selectedTag) bool = true;
												if (
													!bool &&
													props.selectedTags &&
													i + 1 >= props.selectedTags.length &&
													props.value !== selectedTag &&
													props.onTagCreate
												) {
													if (arrowKeySelectedOption === NewTagHintLabel)
														props.onTagCreate(props.value!);
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
					{props.value && props.value.length > 0 && (
						<FIcon
							size="small"
							name={FIconNames.CLOSE}
							onClick={() => props.onInput && props.onInput("")}
							{...props.clearIconProps}
						/>
					)}
				</div>
				{props.value && props.value.length > 0 && (
					<div
						className={styles.FTagInputFieldDropdownContainer(
							inputContainerRef
						)}
					>
						{props.renderCustomizedDropdownComponent}
						{!props.disableDropdown &&
							!props.renderCustomizedDropdownComponent && (
								<FDropdown
									options={
										props.disableFilteredTags ? props.tagData! : filteredTagData
									}
									selectedOptions={props.selectedTags}
									onSelect={(option: any) => {
										console.log("option", option);
										// if (
										// 	!props.disableFilteredTags &&
										// 	option !== ExitsedTagHintLabel &&
										// 	props.value !== NewTagHintLabel &&
										// 	props.value !== ExitsedTagHintLabel
										// ) {
										// 	if (option === NewTagHintLabel)
										// 		props.onTagCreate &&
										// 			props.onTagCreate(props.value!);
										// 	else props.onTagCreate && props.onTagCreate(option);
										// 	props.onInput && props.onInput("");
										// } else {
										// 	if (
										// 		!selected &&
										// 		option !== ExitsedTagHintLabel &&
										// 		option !== NewTagHintLabel
										// 	) {
										// 		props.onTagCreate && props.onTagCreate(option);
										// 		props.onInput && props.onInput("");
										// 	}
										// }
										setIsTriggered(true);
									}}
									arrowKeyPressCount={arrowKeyPressCount}
									hideSelectedOptions={!props.disableFilteredTags}
									renderArrowKeySelectedOption={(option: any) => {
										setTimeout(() => setArrowKeySelectedOption(option), 0);
									}}
									renderCustomizedOption={(option: any, selected: boolean) => (
										<FText
											font={FFontTypes.Large_Text()}
											color={
												option === NewTagHintLabel
													? FUseColor({
															colorName: "Grey",
													  })
													: option === ExitsedTagHintLabel
													? FUseColor({
															colorName: "Red",
													  })
													: FUseColor({
															colorName: "Black",
													  })
											}
											className={styles.FTagInputFieldDropdownOptionDiv(
												selected,
												option === NewTagHintLabel,
												option === ExitsedTagHintLabel
											)}
										>
											{option}
										</FText>
									)}
									{...props.dropdownProps}
								/>
							)}
					</div>
				)}
			</div>
		</div>
	);
};
