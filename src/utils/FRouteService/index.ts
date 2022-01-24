import { FRouteConfig, RouteRecord } from "./types";

function flattenRoutes(routes: FRouteConfig[]): FRouteConfig[] {
	return [
		...routes,
		...routes.reduce<FRouteConfig[]>(
			(accum, route) => [
				...accum,
				...(route.routes ? flattenRoutes(route.routes) : []),
			],
			[]
		),
	];
}

function extractPathLink(path: FRouteConfig["path"]) {
	if (!path) return "/";
	if (Array.isArray(path)) {
		if (path.length > 0) {
			return path[path.length - 1];
		} else {
			return "/";
		}
	} else {
		return path?.split(":")[0];
	}
}

const extractRouteRecords = (
	routes: FRouteConfig[],
	parentRoutes: FRouteConfig[],
	depth: number,
	parentPath: string
) => {
	let routeTable: RouteRecord[] = [];
	routes.map((r) => {
		const newParentPath = depth === 0 ? r.path : `${parentPath}/${r.path}`;
		let newRouteAfterRelativePath: FRouteConfig = { ...r, path: newParentPath };
		let newParentRoutes = [...parentRoutes, newRouteAfterRelativePath];
		routeTable.push({
			path: newParentPath!,
			routes: newParentRoutes,
		});
		if (Array.isArray(r.routes)) {
			let subRouteRecords: RouteRecord[] = extractRouteRecords(
				r.routes,
				newParentRoutes,
				depth + 1,
				newParentPath || ""
			);
			routeTable = routeTable.concat(subRouteRecords);
			return null;
		}
		return null;
	});
	return routeTable;
};

const matchRouteRecords = (path: string, routeTable: RouteRecord[]) => {
	let matchedRouteRecord = routeTable.find((e) => {
		if (Array.isArray(e.path)) {
			if (path === "/") {
				e.path.map((subPath) => {
					return subPath === path;
				});
			} else {
				e.path.map((subPath) => {
					return subPath.includes(path);
				});
			}
		} else {
			if (path === "/") {
				return e.path === path;
			}
			return e.path.includes(path);
		}
		return null;
	});
	return matchedRouteRecord;
};

export const FRouteService = () => {
	return {
		flattenRoutes,
		extractPathLink,
		extractRouteRecords,
		matchRouteRecords,
	};
};
