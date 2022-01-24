import React from "react";
import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { FLinkButton } from "..";
import { FRouteService } from "../utils/FRouteService";
import { FRouteConfig } from "../utils/FRouteService/types";
import * as styles from "./styles";
import { FSideNavBarButtonListProps } from "./types";

export const FSideNavBarButtonList = (props: FSideNavBarButtonListProps) => {
	const location = useLocation();
	const routeService = FRouteService();
	const checkIsSelected = (
		locationPath: string,
		itemPath: string | string[] | undefined
	) => {
		if (!itemPath) {
			return false;
		}
		if (Array.isArray(itemPath)) {
			return itemPath.includes(locationPath);
		} else {
			return locationPath === itemPath;
		}
	};

	const checkIsIncluded = (
		locationPath: string,
		itemPath: string | string[] | undefined
	) => {
		if (!itemPath) {
			return false;
		}
		if (Array.isArray(itemPath)) {
			let isInclude = false;
			itemPath.forEach((e) => {
				if (locationPath.includes(e)) {
					isInclude = true;
					return;
				}
			});
			return isInclude;
		} else {
			return locationPath.includes(itemPath);
		}
	};

	const RenderFSideNavBarButtonList = (
		pathName: string,
		routes: FRouteConfig[],
		depth: number,
		isParentPathIncluded: boolean,
		parentPath: string
	) => {
		return (
			<Fragment>
				{routes.map((r, i) => {
					const haveSubSubMenus = Array.isArray(r.routes);
					const newParentPath =
						depth === 0 ? r.path : `${parentPath}/${r.path}`;
					const isSelected = checkIsSelected(pathName, newParentPath);
					const isIncluded = checkIsIncluded(pathName, newParentPath);
					if (r.hideInMenu) return null;
					return (
						<Fragment key={i}>
							<div
								className={styles.FSideNavBarSubButtonListDiv(
									isParentPathIncluded,
									depth
								)}
							>
								<FLinkButton
									key={`${depth}_${i}`}
									containsRouteChildren={haveSubSubMenus}
									leadingIcon={{
										name: r.iconName!,
									}}
									pathIsSelected={isSelected}
									label={r.menuName}
									pathLink={
										r.defaultRedirect ??
										routeService.extractPathLink(newParentPath)
									}
								/>
							</div>
							{haveSubSubMenus &&
								RenderFSideNavBarButtonList(
									pathName,
									r.routes!,
									depth + 1,
									isIncluded,
									newParentPath || ""
								)}
						</Fragment>
					);
				})}
			</Fragment>
		);
	};
	return (
		<div className={styles.FSideNavBarMainButtonListDiv(props.autoExpand!)}>
			{RenderFSideNavBarButtonList(
				location.pathname,
				props.routes,
				0,
				false,
				""
			)}
		</div>
	);
};
