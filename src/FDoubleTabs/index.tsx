import { FDoubleTabsProps } from "./types";
import * as styles from "./styles";
import { FFontTypes } from "@fantaskticedtechlimited/fui-fontlib";
import { useEffect, useState } from "react";
import React from "react";
import { FButtonProps } from "../FButton/types";
import { FButton, FReturnArray } from "..";

/**
 * `<FDoubleTabs />` is a `<FTabs />` component with only **two** tabs.
 *
 * Props: `FDoubleTabsProps`.
 */
export const FDoubleTabs = (props: FDoubleTabsProps) => {
	const [tabIndex, setTabIndex] = useState<number>(0);
	let defaultTabButtonProps: FButtonProps = {
		type: "Primary",
		label: "",
		leadingComponents: [],
		actionComponents: [],
		disabled: props.disabled ?? false,
		onClick: () => setTabIndex(0),
		style: props.tabButtonProps?.style,
		className: props.tabButtonProps?.className,
	};
	useEffect(() => {
		if (FReturnArray(props.children).length !== 2)
			console.log("Error: FDoubleTabs requires two tabs.");
	}, [props.children]);

	return (
		<div
			style={props.wrapperStyle}
			className={
				styles.FDoubleTabs_Wrapper(props.disabled!) +
				" " +
				props.wrapperClassName
			}
		>
			{FReturnArray(props.children).length === 2 && (
				<>
					<div
						style={props.headerStyle}
						className={styles.FDoubleTabs_Header + " " + props.headerClassName}
					>
						{props.leadingComponents}
						<div
							style={props.tabContainerStyle}
							className={
								styles.FDoubleTabs_TabsContainer() +
								" " +
								props.tabContainerClassName
							}
						>
							{FReturnArray(props.children).map((tab, index) => {
								let isSelect = tabIndex === index ? true : false;
								let tabButtonProps: FButtonProps = {
									...defaultTabButtonProps,
									type: isSelect ? "Primary" : "Text",
									label:
										tab.props.label ?? index === 0
											? "Double Tab 1"
											: "Double Tab 2",
									leadingComponents:
										tab.props.tabButtonLeadingComponents &&
										tab.props.tabButtonLeadingComponents(isSelect),
									actionComponents:
										tab.props.tabButtonActionComponents &&
										tab.props.tabButtonActionComponents(isSelect),
									disabled: props.disabled ?? tab.props.disabled,
									onClick: () => setTabIndex(index),
									labelProps: {
										font:
											props.tabButtonProps?.labelProps?.font ??
											FFontTypes.Large_Text(),
									},
									className: () =>
										styles.FDoubleTabs_TabButton_Container(isSelect),
									...tab.props.tabButtonProps,
								};

								return tab.props.customTabButton ? (
									tab.props.customTabButton(isSelect, tabButtonProps)
								) : props.customTabButton ? (
									props.customTabButton(isSelect, tabButtonProps)
								) : (
									<FButton
										key={index}
										{...tabButtonProps}
										{...props.tabButtonProps}
										{...tab.props.tabButtonProps}
									/>
								);
							})}
						</div>
						{props.actionComponents}
					</div>
					{FReturnArray(props.children).map((panel, index) => {
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
				</>
			)}
		</div>
	);
};
