import React, { useState } from "react";
import { FAutoConvertArray, FButton } from "..";
import { FButtonProps, FButtonTypes } from "../FButton/types";
import * as styles from "./styles";
import { FTabPanelProps, FTabsProps } from "./types";

export const FTabsPanel = (props: FTabPanelProps) => {
	const { children, style, className } = props;
	return (
		<div style={style} className={className}>
			{children}
		</div>
	);
};

export const FTabs = (props: FTabsProps) => {
	const [tabIndex, setTabIndex] = useState<number>(0);
	let defaultButtonProps: FButtonProps = {
		type: FButtonTypes.PRIMARY,
		label: "",
		leadingComponents: [],
		actionComponents: [],
		disabled: props.disabled ?? false,
		onClick: () => setTabIndex(0),
		style: props.tabButtonProps?.style,
		className: props.tabButtonProps?.className,
	};
	return (
		<div
			style={props.wrapperStyle}
			className={
				styles.FTabsWrapper(props.disabled!) + " " + props.wrapperClassName
			}
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
							key: index,
							...defaultButtonProps,
							type: isSelect ? FButtonTypes.PRIMARY : FButtonTypes.SECONDARY,
							label: tab.props.label,
							leadingComponents:
								tab.props.tabLeadingComponents &&
								tab.props.tabLeadingComponents(isSelect),
							actionComponents:
								tab.props.tabActionConmponents &&
								tab.props.tabActionConmponents(isSelect),
							disabled: props.disabled ?? tab.props.disabled,
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
