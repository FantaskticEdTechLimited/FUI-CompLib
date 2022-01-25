import React, { Fragment, useEffect, useState } from "react";
import { FButton } from "..";
import { FButtonTypes } from "../FButton/types";
import * as styles from "./styles";
import { FTabPanelProps, FTabsProps } from "./types";

export const FTabsPanel = (props: FTabPanelProps) => {
	const { children } = props;
	return <Fragment>{children}</Fragment>;
};

export const FTabs = (props: FTabsProps) => {
	const [tabIndex, setTabIndex] = useState<number>(0);

	useEffect(() => {
		if (props.tabIndex) setTabIndex(props.tabIndex);
	}, [props.tabIndex]);

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
					{props.renderCustomizedTabs ??
						(props.children && Array.isArray(props.children)
							? props.children.map((tab, index) => (
									<FButton
										key={index}
										type={
											tabIndex === index
												? FButtonTypes.PRIMARY
												: FButtonTypes.SECONDARY
										}
										disabled={props.disabled ?? tab.props.disabled}
										label={tab.props.label}
										onClick={() => setTabIndex(index)}
										{...tab.props.tabButtonProps}
									/>
							  ))
							: props.children && (
									<FButton
										type={FButtonTypes.PRIMARY}
										disabled={props.disabled ?? props.children.props.disabled}
										label={props.children.props.label}
										onClick={() => setTabIndex(0)}
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
					else return
				})
			) : (
				<Fragment>{props.children && props.children.props.children}</Fragment>
			)}
		</div>
	);
};
