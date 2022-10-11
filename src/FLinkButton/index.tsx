import { FIcon, FIconNames } from "@fantaskticedtechlimited/fui-iconlib";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FText, FUseColor } from "..";
import * as styles from "./styles";
import { FLinkButtonProps } from "./types";

export const FLinkButton = (props: FLinkButtonProps) => {
	const isSelected = props.pathIsSelected;
	const index = props.index;
	const [isHover, setIsHover] = useState<boolean>(false);
	const mainThemeColor = FUseColor({ colorName: "Main" });
	const blackColor = FUseColor({ colorName: "Black" });

	return (
		<Link
			style={props.style && props.style(isHover, index)}
			className={
				styles.FLinkButtonContainer(isSelected!, props) +
				" " +
				(props.className && props.className(isHover, index))
			}
			to={props.pathLink!}
			onClick={() =>
				props.disabled ? () => {} : props.onClick && props.onClick()
			}
			// Added hover effect for className and style
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			{props.customChildren ?? (
				<>
					{props.leadingComponents ?? props.leadingIcon ? (
						<FIcon
							color={() => (isSelected ? mainThemeColor : blackColor)}
							{...props.leadingIcon}
						/>
					) : undefined}
					<FText
						style={props.labelStyle && props.labelStyle(isHover, index)}
						className={
							styles.FLinkButtonLabel +
							" " +
							(props.labelClassName && props.labelClassName(isHover, index))
						}
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
									color={() => (isSelected ? mainThemeColor : blackColor)}
									{...props.actionIcon}
								/>
						  )}
				</>
			)}
		</Link>
	);
};
