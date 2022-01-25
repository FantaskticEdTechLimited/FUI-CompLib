import React, { Fragment, useState } from "react";
import { FButton } from "..";
import { FButtonProps, FButtonTypes } from "../FButton/types";
import * as styles from "./styles";
import { FTabPanelProps, FTabsProps } from "./types";

export const FTabsPanel = (props: FTabPanelProps) => {
	const { children } = props;
	return <Fragment>{children}</Fragment>;
};

export const FTabs = (props: FTabsProps) => {
	const [tabIndex, setTabIndex] = useState<number>(0);
	let defaultButtonProps: FButtonProps = {
		type: FButtonTypes.PRIMARY,
		label: "",
		disabled: props.disabled ?? false,
		onClick: () => setTabIndex(0),
		style: props.tabButtonStyle,
		className: props.tabButtonClassName,
	};
	return (
		<div
			style={props.wrapperStyle}
			className={
				props.wrapperClassName + " " + styles.FTabsWrapper(props.disabled!)
			}
		>
			{/* header container that contains tabs */}
			<div
				style={props.headerStyle}
				className={props.headerClassName + " " + styles.FTabsHeaderContainer}
			>
				{props.leadingComponents}
				<div
					style={props.tabContainerStyle}
					className={
						props.tabContainerClassName + " " + styles.FTabsTabContainer
					}
				>
					{props.children && Array.isArray(props.children)
						? props.children.map((tab, index) => {
								let isSelect = tabIndex === index ? true : false;
								let buttonProps: FButtonProps = {
									key: index,
									...defaultButtonProps,
									type: isSelect
										? FButtonTypes.PRIMARY
										: FButtonTypes.SECONDARY,
									label: tab.props.label,
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
						  })
						: props.children &&
						  (props.children.props.renderCustomizedTabButton ? (
								props.children.props.renderCustomizedTabButton(true, {
									...defaultButtonProps,
									label: props.children.props.label,
									disabled: props.disabled ?? props.children.props.disabled,
									...props.children.props.tabButtonProps,
								})
						  ) : props.renderCustomizedTabButton ? (
								props.renderCustomizedTabButton(true, {
									...defaultButtonProps,
									label: props.children.props.label,
									disabled: props.disabled ?? props.children.props.disabled,
									...props.children.props.tabButtonProps,
								})
						  ) : (
								<FButton
									{...defaultButtonProps}
									label={props.children.props.label}
									disabled={props.disabled ?? props.children.props.disabled}
									{...props.tabButtonProps}
									{...props.children.props.tabButtonProps}
								/>
						  ))}
				</div>
				{props.actionComponents}
			</div>
			{/* panel under the corresponding tab */}
			{props.children && Array.isArray(props.children) ? (
				props.children.map((panel, index) => {
					if (index === tabIndex)
						return <Fragment key={index}>{panel.props.children}</Fragment>;
					else return;
				})
			) : (
				<Fragment>{props.children && props.children.props.children}</Fragment>
			)}
		</div>
	);
};
