import { useState } from "react";
import { FTabsControllerProps } from "./types";

export const FTabsController = (props?: { initKey?: string }) => {
	const { initKey } = props ?? {};
	const [tabKey, setTabKey] = useState<string>(initKey ?? "");
	const controller: FTabsControllerProps = {
		tabKey,
		setTabKey,
	};
	return controller;
};
