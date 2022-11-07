import { useState } from "react";
import { FTabsControllerProps } from "./types";

export const FTabsController = (props?: { initKey?: string }) => {
	const { initKey } = props ?? {};
	const [tabsKey, setTabsKey] = useState<string>(initKey ?? "");
	const controller: FTabsControllerProps = {
		tabsKey,
		setTabsKey,
	};
	return controller;
};
