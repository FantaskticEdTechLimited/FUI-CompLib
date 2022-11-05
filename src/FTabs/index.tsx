import React from "react";
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
		if (controller.tabKey === "" && panelProps.length > 0) {
			controller.setTabKey(panelProps[0].tabKey);
		}
	}, [panelProps, controller]);

	return (
		<div>
			{!disableHeader && (
				<FTabsHeader
					style={props.headerStyle}
					className={props.headerClassName}
					controller={controller}
					panelProps={panelProps}
					tabButtonProps={props.tabButtonProps}
				/>
			)}
			{panels.map((e) => {
				const { tabKey } = e.props;
				if (tabKey === controller.tabKey) return e;
				return undefined;
			})}
		</div>
	);
};
