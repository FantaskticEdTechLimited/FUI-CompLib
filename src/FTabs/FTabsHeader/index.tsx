import React from "react";
import { FButton } from "../../FButton";
import { FScrollBarStyle } from "../../FScrollBarStyle";
import { FReturnColor } from "../../utils/FReturnColor";
import { FTabsHeader_Button_Div, styles } from "./styles";
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
				const isSelected = controller.tabKey === p.tabKey;
				const labelColor = (isHover?: boolean) =>
					FReturnColor({
						color: isSelected || isHover ? "Main" : "Grey",
					});

				return (
					<FButton
						key={p.tabKey}
						className={(isHover) => FTabsHeader_Button_Div(isHover)}
						type={isSelected ? "Secondary" : "Text"}
						label={p.label}
						labelProps={(isHover) => ({
							color: () => labelColor(isHover),
							...props.tabButtonProps?.labelProps,
						})}
						onClick={() => controller.setTabKey(p.tabKey)}
						{...props.tabButtonProps}
					/>
				);
			})}
		</div>
	);
};
