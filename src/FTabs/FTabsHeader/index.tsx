import React from "react";
import { FScrollBarStyle } from "../../FScrollBarStyle";
import { FTabsButton } from "./FTabsButton";
import { styles } from "./styles";
import { FTabsHeaderProps } from "./types";

export const FTabsHeader = (props: FTabsHeaderProps) => {
	const { controller, panelProps } = props;

	return (
		<div
			style={props.style}
			className={
				styles.FTabsHeader_Container +
				" " +
				FScrollBarStyle() +
				" " +
				props.className
			}
		>
			{panelProps.map((p) => {
				const isSelected = controller.tabsKey === p.tabsKey;

				return (
					<FTabsButton
						key={p.tabsKey}
						label={p.label}
						isSelected={isSelected}
						onClick={() => controller.setTabsKey(p.tabsKey)}
						style={props.tabsButtonStyle}
						className={props.tabsButtonClassName}
						labelProps={props.tabsButtonLabelProps}
					/>
				);
			})}
		</div>
	);
};
