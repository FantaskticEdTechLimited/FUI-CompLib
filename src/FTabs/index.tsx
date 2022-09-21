import React, { useState } from "react";
import { FAutoConvertArray, FButton } from "..";
import { FButtonProps } from "../FButton/types";
import * as styles from "./styles";
import { FTabsProps } from "./types";

/** `<FTabs />` is a customized `Tab` component,
 * which returns tab buttons for tab screen.
 *
 * **Use with `<FTabsPanel />`.**
 *
 * Props: `FTabsProps`.
 *
 *  */
export const FTabs = ({ disabled = false, ...props }: FTabsProps) => {
	const [tabIndex, setTabIndex] = useState<number>(0);
	let defaultButtonProps: FButtonProps = {
		type: "Primary",
		label: "",
		leadingComponents: [],
		actionComponents: [],
		disabled: disabled ?? false,
		onClick: () => setTabIndex(0),
		style: props.tabButtonProps?.style,
		className: props.tabButtonProps?.className,
	};
	return (
		<div
			style={props.wrapperStyle}
			className={styles.FTabsWrapper(disabled!) + " " + props.wrapperClassName}
		>
			{/* header container that contains tabs */}
			<div
				style={props.headerStyle}
				className={styles.FTabsHeader + " " + props.headerClassName}
			>
				{props.leadingComponents}
				<div
					style={props.tabContainerStyle}
					className={
						styles.FTabsTabContainer + " " + props.tabContainerClassName
					}
				>
					{FAutoConvertArray(props.children).map((tab, index) => {
						let isSelect = tabIndex === index ? true : false;
						let buttonProps: FButtonProps = {
							...defaultButtonProps,
							type: isSelect ? "Primary" : "Secondary",
							label: tab.props.label,
							leadingComponents:
								tab.props.tabLeadingComponents &&
								tab.props.tabLeadingComponents(isSelect),
							actionComponents:
								tab.props.tabActionConmponents &&
								tab.props.tabActionConmponents(isSelect),
							disabled: disabled ?? tab.props.disabled,
							onClick: () => setTabIndex(index),
							...tab.props.tabButtonProps,
						};

						return tab.props.renderCustomizedTabButton ? (
							tab.props.renderCustomizedTabButton(isSelect, buttonProps)
						) : props.renderCustomizedTabButton ? (
							props.renderCustomizedTabButton(isSelect, buttonProps)
						) : (
							<FButton
								key={index}
								{...buttonProps}
								{...props.tabButtonProps}
								{...tab.props.tabButtonProps}
							/>
						);
					})}
				</div>
				{props.actionComponents}
			</div>
			{/* panel under the corresponding tab */}
			{FAutoConvertArray(props.children).map((panel, index) => {
				const panelProps = panel.props;
				if (panelProps.isRenderOnSelected) {
					if (index === tabIndex)
						return (
							<div
								key={index}
								style={panelProps.style}
								className={panelProps.className}
							>
								{panelProps.children}
							</div>
						);
					else return;
				} else {
					return (
						<div
							key={index}
							style={{
								overflow: "hidden",
								height: "100%",
								width: "100%",
								display: index === tabIndex ? "block" : "none",
								...panelProps.style,
							}}
							className={panelProps.className}
						>
							{panelProps.children}
						</div>
					);
				}
			})}
		</div>
	);
};
