import React from "react";
import { FScrollBarStyle } from "../../FScrollBarStyle";
import { FTabsButton } from "./FTabsButton";
import { styles } from "./styles";
import { FTabsHeaderProps } from "./types";

export const FTabsHeader = (props: FTabsHeaderProps) => {
	const { controller, panelProps, style, className, tabsButtonProps } = props;

	return (
		<div
			style={style}
			className={
				styles.FTabsHeader_Container + " " + FScrollBarStyle() + " " + className
			}
		>
			{panelProps.map((p) => {
				const isSelected = controller.tabsKey === p.tabsKey;

				return (
					<FTabsButton
						key={p.tabsKey}
						tabsKey={p.tabsKey}
						label={p.label}
						isSelected={isSelected}
						onClick={() => controller.setTabsKey(p.tabsKey)}
						{...tabsButtonProps}
					/>
				);
			})}
		</div>
	);
};
