import { FIcon, FIconNames } from "@fantaskticedtechlimited/fui-iconlib";
import React from "react";
import { useState, useEffect, useRef, Fragment } from "react";
import { FScrollBarStyle, FUseColor } from "..";
import { FRWDMode } from "../global.types";
import * as styles from "./styles";
import { FSideNavBarProps } from "./types";

export const FRWDNavBar = (props: FSideNavBarProps) => {
	const [openSideBar, setOpenSideBar] = useState<boolean>(false);
	const OpenedSideNavBarRef = useRef<HTMLDivElement>(null);
	const mainThemeColor = FUseColor({ colorName: "Main" });

	const handleClickOutside = (event: any) => {
		if (
			OpenedSideNavBarRef.current &&
			!OpenedSideNavBarRef.current.contains(event.target)
		)
			setOpenSideBar(false);
	};

	useEffect(() => {
		window.addEventListener("mousedown", handleClickOutside);
		return () => {
			window.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	useEffect(() => {
		if (props.forcedToClose) setOpenSideBar(false);
	}, [props.forcedToClose]);

	return (
		<>
			{/* Mobile Mode */}
			{props.rwdMode !== FRWDMode.FULL ? (
				<Fragment>
					{/* Top Bar */}
					<div
						style={props.topBarStyle}
						className={
							styles.FTopNavBarContainer(props) + " " + props.topBarClassName
						}
					>
						{props.logo ?? props.topBarLeadingComponents}
						{props.topBarActionComponents ?? (
							<FIcon
								name={FIconNames.MENU}
								size="large"
								onClick={() => setOpenSideBar(true)}
								strokeColor={mainThemeColor}
								className={styles.FTopNavBarContainer_MenuIcon()}
								{...props.menuIconProps}
							/>
						)}
					</div>

					{/* Hidden SideBar */}
					<div
						style={props.overlayStyle}
						className={
							styles.FHiddenSideBarOverlay(props, openSideBar) +
							" " +
							props.overlayClassName
						}
					>
						{/* Menu location controller */}
						<div
							className={
								styles.FHiddenSideBarContainer() +
								" " +
								props.containerClassName
							}
							style={props.containerStyle}
							ref={OpenedSideNavBarRef}
						>
							<FIcon
								name={FIconNames.CLOSE}
								size="large"
								onClick={() => setOpenSideBar(false)}
								strokeColor={mainThemeColor}
								className={styles.FTopNavBarContainer_CloseIcon()}
								{...props.closeIconProps}
							/>
							<div
								style={props.contentDivStyle}
								className={
									styles.FSideNavBar_ContentDiv +
									" " +
									props.contentDivClassName +
									" " +
									FScrollBarStyle({
										...props.scrollBarProps,
									})
								}
							>
								{props.children}
							</div>
						</div>
					</div>
				</Fragment>
			) : (
				//  Normal SideBar
				<Fragment>
					<div
						className={
							styles.FNormalSideNavBarContainer() +
							" " +
							props.containerClassName
						}
						style={props.containerStyle}
					>
						{props.logo}
						{props.needDivider && <div className={styles.Divider()} />}
						<div
							className={
								styles.FSideNavBar_ContentDiv +
								" " +
								props.contentDivClassName +
								" " +
								FScrollBarStyle({
									...props.scrollBarProps,
								})
							}
							style={props.contentDivStyle}
						>
							{props.children}
						</div>
					</div>
				</Fragment>
			)}
		</>
	);
};
