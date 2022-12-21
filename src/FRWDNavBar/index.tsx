import { FIcon, FIconNames } from "@innoplus-studio/fui-iconlib";
import React from "react";
import { useState, useEffect, useRef, Fragment } from "react";
import { FReturnColor, FScrollBarStyle } from "..";
import { FRWDMode } from "../global.types";
import { FJoinClassNames } from "../utils/FJoinClassNames";
import {
	styles,
	topBarContainer,
	topBarCloseIcon,
	topBarMenuIcon,
	hiddenSideBarContainer,
	hiddenSideBarOverlay,
	sideBarContainer,
	dividerDiv,
} from "./styles";
import { FRWDNavBarProps } from "./types";

/**
 * `<FRWDNavBar />` is a component
 * which returns a side or top navigation bar based on the RWD mode.
 *
 * Props: `FRWDNavBarProps`.
 */
export const FRWDNavBar = (props: FRWDNavBarProps) => {
	const {
		rwdMode,
		overlayEnterSide,
		children,
		visible,
		forcedToClose,
		overlayStyle,
		overlayClassName,
		dividerStyle,
		dividerClassName,
		needDivider,
		containerStyle,
		containerClassName,
		contentDivStyle,
		contentDivClassName,
		topBarStyle,
		topBarClassName,
		topBarCustomCloseIcon,
		topBarCustomCloseIconProps,
		topBarCustomMenuIcon,
		topBarCustomMenuIconProps,
		topBarLeadingComponents,
		logo,
		menuIconProps,
		closeIconProps,
		scrollBarProps,
	} = props;
	const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
	const hiddenSideBarRef = useRef<HTMLDivElement>(null);
	const mainThemeColor = FReturnColor({ color: "Main" });

	const handleClickOutside = (event: any) => {
		if (
			hiddenSideBarRef.current &&
			!hiddenSideBarRef.current.contains(event.target)
		)
			setIsSideBarOpen(false);
	};

	useEffect(() => {
		window.addEventListener("mousedown", handleClickOutside);
		return () => {
			window.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	useEffect(() => {
		if (forcedToClose) setIsSideBarOpen(false);
	}, [forcedToClose]);

	return (
		<>
			{rwdMode !== FRWDMode.PC ? (
				<Fragment>
					<div
						style={topBarStyle}
						className={FJoinClassNames([
							topBarContainer(visible, rwdMode),
							topBarClassName,
						])}
					>
						{logo ?? topBarLeadingComponents}
						{topBarCustomMenuIcon ? (
							<div
								onClick={() => setIsSideBarOpen(true)}
								{...topBarCustomMenuIconProps}
							>
								{topBarCustomMenuIcon}
							</div>
						) : (
							<FIcon
								name={FIconNames.MENU}
								onClick={() => setIsSideBarOpen(true)}
								color={() => mainThemeColor}
								className={() => topBarMenuIcon()}
								{...menuIconProps}
							/>
						)}
					</div>

					{/* Hidden SideBar */}
					<div
						style={overlayStyle}
						className={FJoinClassNames([
							hiddenSideBarOverlay(visible, isSideBarOpen, overlayEnterSide),
							overlayClassName,
						])}
					>
						{/* Menu location controller */}
						<div
							className={FJoinClassNames([
								hiddenSideBarContainer(),
								containerClassName,
							])}
							style={containerStyle}
							ref={hiddenSideBarRef}
						>
							{topBarCustomCloseIcon ? (
								<div
									onClick={() => setIsSideBarOpen(false)}
									{...topBarCustomCloseIconProps}
								>
									{topBarCustomCloseIcon}
								</div>
							) : (
								<FIcon
									name={FIconNames.CLOSE}
									size="large"
									onClick={() => setIsSideBarOpen(false)}
									color={() => mainThemeColor}
									className={() => topBarCloseIcon()}
									{...closeIconProps}
								/>
							)}
							<div
								style={contentDivStyle}
								className={FJoinClassNames([
									styles.contentDiv,
									contentDivClassName,
									FScrollBarStyle({
										...scrollBarProps,
									}),
								])}
							>
								{children}
							</div>
						</div>
					</div>
				</Fragment>
			) : (
				<div
					className={FJoinClassNames([sideBarContainer(), containerClassName])}
					style={containerStyle}
				>
					{logo}
					{needDivider && (
						<div
							style={dividerStyle}
							className={FJoinClassNames([dividerDiv(), dividerClassName])}
						/>
					)}
					<div
						className={FJoinClassNames([
							styles.contentDiv,
							contentDivClassName,
							FScrollBarStyle({
								...scrollBarProps,
							}),
						])}
						style={contentDivStyle}
					>
						{children}
					</div>
				</div>
			)}
		</>
	);
};
