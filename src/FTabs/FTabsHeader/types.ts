import { CSSProperties } from "react";
import { FTextProps } from "../../FText/types";
import { FOnHoverProperty } from "../../global.types";
import { FTabsControllerProps } from "../FTabsController/types";
import { FTabsPanelProps } from "../FTabsPanel/types";

export interface FTabsHeaderProps {
	/** Controls the header and tab button using the remote controller. */
	controller: FTabsControllerProps;
	/** Properties of the tabs panel. */
	panelProps: FTabsPanelProps[];
	/** Style of the tabs header. */
	style?: CSSProperties;
	/** Class name of the tabs header. */
	className?: string;
	/** Style of the tabs button. */
	tabsButtonStyle?: FOnHoverProperty<CSSProperties>;
	/** Class name of the tabs button. */
	tabsButtonClassName?: FOnHoverProperty<string>;
	/** Properties of the tabs button label. */
	tabsButtonLabelProps?: FTextProps;
}
