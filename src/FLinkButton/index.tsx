import { FIcon, FIconNames } from "@fantaskticedtechlimited/fui-iconlib";
import React from "react";
import { Link } from "react-router-dom";
import { FText, FUseColor } from "..";
import * as styles from "./styles";
import { FLinkButtonProps } from "./types";

export const FLinkButton = (props: FLinkButtonProps) => {
	const isSelected = props.pathIsSelected;
	const mainThemeColor = FUseColor({ colorName: "Main" });
	const blackColor = FUseColor({
		colorName: "Black",
	});

	return (
		<Link
			style={props.style}
			className={
				styles.FLinkButtonContainer(isSelected!, props) + " " + props.className
			}
			to={props.pathLink!}
			onClick={() =>
				props.disabled ? () => {} : props.onClick && props.onClick()
			}
		>
			{props.customChildren ?? (
				<>
					{props.leadingComponents ?? props.leadingIcon ? (
						<FIcon
							strokeColor={isSelected ? mainThemeColor : blackColor}
							{...props.leadingIcon}
						/>
					) : undefined}
					<FText
						style={props.labelStyle}
						className={styles.FLinkButtonLabel + " " + props.labelClassName}
						color={isSelected ? mainThemeColor : blackColor}
						children={props.label}
						{...props.labelProps}
					/>
					{props.actionComponents
						? props.actionComponents
						: props.containsRouteChildren && (
								<FIcon
									name={FIconNames.ARROW_DOWN}
									size="small"
									strokeColor={isSelected ? mainThemeColor : blackColor}
									{...props.actionIcon}
								/>
						  )}
				</>
			)}
		</Link>
	);
};
