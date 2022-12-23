import { FDoubleTabsProps } from "./types";
import {
	styles,
	doubleTabsTabButtonContainer,
	doubleTabsTabContainer,
	doubleTabsWrapper,
} from "./styles";
import { FFontTypes } from "@innoplus-studio/fui-fontlib";
import { useEffect, useState } from "react";
import React from "react";
import { FButtonProps } from "../FButton/types";
import { FButton, FJoinClassNames, FReturnArray } from "..";

/**
 * `<FDoubleTabs />` is a `<FTabs />` component with only **two** tabs.
 *
 * Props: `FDoubleTabsProps`.
 */
export const FDoubleTabs = (props: FDoubleTabsProps) => {
	const {
		disabled = false,
		headerStyle,
		tabContainerStyle,
		wrapperStyle,
		headerClassName,
		wrapperClassName,
		tabContainerClassName,
		tabButtonProps: DoubleTabsTabButtonProps,
		children,
		actionComponents,
		leadingComponents,
	} = props;

	const [tabIndex, setTabIndex] = useState<number>(0);

	useEffect(() => {
		if (FReturnArray(children).length !== 2)
			throw new Error("FDoubleTabs requires two tabs.");
	}, [children]);

	return (
		<div
			style={wrapperStyle}
			className={FJoinClassNames([
				doubleTabsWrapper(disabled!),
				wrapperClassName,
			])}
		>
			{FReturnArray(children).length === 2 && (
				<>
					<div
						style={headerStyle}
						className={FJoinClassNames([
							styles.doubleTabsHeader,
							headerClassName,
						])}
					>
						{leadingComponents}
						<div
							style={tabContainerStyle}
							className={FJoinClassNames([
								doubleTabsTabContainer(),
								tabContainerClassName,
							])}
						>
							{FReturnArray(children).map((tab, index) => {
								const {
									label,
									tabButtonLeadingComponents,
									tabButtonActionComponents,
									style,
									className,
									...restProps
								} = tab.props;

								let isSelect = tabIndex === index ? true : false;
								let defaultTabButtonProps: FButtonProps = {
									...restProps,
									type: isSelect ? "primary" : "text",
									label: label ?? index === 0 ? "Double Tab 1" : "Double Tab 2",
									leadingComponents: () =>
										tabButtonLeadingComponents &&
										tabButtonLeadingComponents(isSelect),
									actionComponents: () =>
										tabButtonActionComponents &&
										tabButtonActionComponents(isSelect),
									disabled: disabled ?? disabled,
									onClick: () => setTabIndex(index),
									labelProps: { font: FFontTypes.Large_Text() },
									className: doubleTabsTabButtonContainer(isSelect),
								};

								return (
									<FButton
										key={index}
										{...DoubleTabsTabButtonProps}
										{...defaultTabButtonProps}
									/>
								);
							})}
						</div>
						{actionComponents}
					</div>
					{FReturnArray(children).map((panel, index) => {
						const { isRenderOnSelected, style, className, children } =
							panel.props;

						if (isRenderOnSelected) {
							if (index === tabIndex)
								return (
									<div key={index} style={style} className={className}>
										{children}
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
										...style,
									}}
									className={className}
								>
									{children}
								</div>
							);
						}
					})}
				</>
			)}
		</div>
	);
};
