import React, { Fragment } from "react";
import { useEffect, useMemo } from "react";
import { FReturnArray } from "../utils/FReturnArray";
import { FTabsController } from "./FTabsController";
import { FTabsHeader } from "./FTabsHeader";
import { FTabsProps } from "./types";

export const FTabs = (props: FTabsProps) => {
	const {
		children,
		controller: remoteController,
		disableHeader = false,
		style,
		className,
		tabsButtonProps,
	} = props;
	const panels = FReturnArray(children);
	const localTabController = FTabsController();

	const controller = useMemo(() => {
		if (remoteController) {
			return remoteController;
		}
		return localTabController;
	}, [remoteController, localTabController]);

	const panelProps = panels.map((p) => p.props);

	useEffect(() => {
		if (controller.tabsKey === "" && panelProps.length > 0) {
			controller.setTabsKey(panelProps[0].tabsKey);
		}
	}, [panelProps, controller]);

	return (
		<div style={style} className={className}>
			{!disableHeader && (
				<FTabsHeader
					style={props.headerStyle}
					className={props.headerClassName}
					controller={controller}
					panelProps={panelProps}
					tabsButtonProps={tabsButtonProps}
				/>
			)}
			{panels.map((e) => {
				const { tabsKey } = e.props;
				if (tabsKey === controller.tabsKey)
					return <Fragment key={tabsKey}>{e}</Fragment>;
				return undefined;
			})}
		</div>
	);
};
