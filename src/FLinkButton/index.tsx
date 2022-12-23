import { FIcon, FIconNames } from "@innoplus-studio/fui-iconlib";
import React from "react";
import { Link } from "react-router-dom";
import { FText, FReturnColor, FJoinClassNames } from "..";
import { linkButtonContainer } from "./styles";
import { FLinkButtonProps } from "./types";

/**
 * `<FLinkButton />` is a `FButton` component
 * which can link with another route when clicked.
 *
 * Props: `FLinkButtonProps`.
 */
export const FLinkButton = (props: FLinkButtonProps) => {
	const {
		ref,
		isPathSelected,
		disabled = false,
		style,
		className,
		children,
		pathLink = "/",
		onClick,
		leadingComponents,
		actionComponents,
		labelProps,
		actionIconProps,
		leadingIconProps,
		isContainRouteChildren,
		label,
	} = props;
	const color = isPathSelected
		? FReturnColor({ color: "Main" })
		: FReturnColor({ color: "Black" });

	return (
		<Link
			ref={ref}
			style={style}
			className={FJoinClassNames([
				linkButtonContainer(disabled, isPathSelected),
				className,
			])}
			to={pathLink}
			onClick={() => (disabled ? () => {} : onClick && onClick())}
		>
			{children ? (
				children
			) : (
				<>
					{leadingComponents ? (
						leadingComponents
					) : leadingIconProps ? (
						<FIcon color={() => color} {...leadingIconProps} />
					) : undefined}
					<FText
						style={{ flexGrow: 1, ...labelProps?.style }}
						color={color}
						children={label}
						{...labelProps}
					/>
					{actionComponents ? (
						actionComponents
					) : isContainRouteChildren ? (
						<FIcon
							name={FIconNames.ARROW_DOWN}
							size="small"
							color={() => color}
							{...actionIconProps}
						/>
					) : null}
				</>
			)}
		</Link>
	);
};
