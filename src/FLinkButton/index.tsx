import { FIcon, FIconNames } from "@fantaskticedtechlimited/fui-iconlib";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FText, FReturnColor } from "..";
import { FLinkButtonContainer } from "./styles";
import { FLinkButtonProps } from "./types";

/**
 * `<FLinkButton />` is a `FButton` component
 * which can link with another route when clicked.
 *
 * Props: `FLinkButtonProps`.
 */
export const FLinkButton = (props: FLinkButtonProps) => {
	const isSelected = props.pathIsSelected;
	const [isHover, setIsHover] = useState<boolean>(false);
	const mainThemeColor = FReturnColor({ color: "Main" });
	const blackColor = FReturnColor({ color: "Black" });

	return (
		<Link
			style={props.style && props.style(isHover)}
			className={
				FLinkButtonContainer(isSelected!, props) +
				" " +
				(props.className && props.className(isHover))
			}
			to={props.pathLink!}
			onClick={() =>
				props.disabled ? () => {} : props.onClick && props.onClick()
			}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			{props.customChildren ?? (
				<>
					{props.leadingComponents ?? props.leadingIconProps ? (
						<FIcon
							color={() => (isSelected ? mainThemeColor : blackColor)}
							{...props.leadingIconProps}
						/>
					) : undefined}
					<FText
						style={() => ({
							flexGrow: 1,
							...(props.labelProps &&
								props.labelProps(isHover) &&
								props.labelProps(isHover).style),
						})}
						color={() => (isSelected ? mainThemeColor : blackColor)}
						children={props.label}
						{...(props.labelProps && props.labelProps(isHover))}
					/>
					{props.actionComponents
						? props.actionComponents
						: props.containsRouteChildren && (
								<FIcon
									name={FIconNames.ARROW_DOWN}
									size="small"
									color={() => (isSelected ? mainThemeColor : blackColor)}
									{...props.actionIconProps}
								/>
						  )}
				</>
			)}
		</Link>
	);
};
