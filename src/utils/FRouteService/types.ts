import { FIconTypes } from "@fantaskticedtechlimited/fui-iconlib";
import { Key } from "react";

export interface RouteRecord {
	path: string | string[];
	routes: FRouteConfig[];
}

export interface FRouteConfig {
	component: React.ElementType;
	menuName?: string;
	breadcrumbName: string | null;
	hideInMenu?: boolean;
	iconName?: FIconTypes;
	defaultRedirect?: string;

	// extract from RouteConfig
	key?: Key;
	index ?:boolean //index Route will not have path and routes, and auto redirect to it as a HomePage of that route
	location?: Location | undefined;
	path?: string;
	exact?: boolean | undefined;
	strict?: boolean | undefined;
	routes?: FRouteConfig[] | undefined;
}
