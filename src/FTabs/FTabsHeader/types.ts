import { PropsWithCustomStyle } from "../../global.types";
import { FTabsControllerProps } from "../FTabsController/types";
import { FTabsPanelProps } from "../FTabsPanel/types";
import { ModifiedFTabsButtonProps } from "./FTabsButton/types";

export type FTabsHeaderProps = PropsWithCustomStyle & {
	/** Controls the header and tab button using the remote controller. */
	controller: FTabsControllerProps;
	/** Properties of the tabs panel. */
	panelProps: FTabsPanelProps[];
	/** Properties of the tabs button. */
	tabsButtonProps?: ModifiedFTabsButtonProps;
};
