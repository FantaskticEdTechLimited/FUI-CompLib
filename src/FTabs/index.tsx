import React from "react";
import { FButton } from "..";
import { FButtonTypes } from "../FButton/types";
import * as styles from "./styles";
import { FTabProps, FTabsProps } from "./types";

export const FTabs = (props: FTabsProps) => {
	return (
		<div
			style={props.containerStyle}
			className={
				props.containerClassName + " " + styles.FTabsContainer(props.disabled!)
			}
		>
			{props.tabList &&
				props.tabList.map((tab: FTabProps, index: number) => (
					<FButton
						key={tab.id ?? index}
						type={tab.isActive ? FButtonTypes.PRIMARY : FButtonTypes.SECONDARY}
						disabled={props.disabled ?? tab.disabled}
						label={tab.label}
						children={tab.children}
						onClick={tab.onClick}
						{...tab.tabProps}
					/>
				))}
		</div>
	);
};
