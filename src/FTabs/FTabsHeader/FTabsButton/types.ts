import { CSSProperties } from "react";
import { FTextProps } from "../../../FText/types";
import { FOnClickFunction, FOnHoverProperty } from "../../../global.types";

export interface FTabsButtonProps {
	/** Label text of the tabs button. */
	label: string;
	/** If `true`, the tabs button is selected. */
	isSelected: boolean;
	/** Click action event of the tabs button. */
	onClick: FOnClickFunction;
	/** Style of the tabs button. */
	style?: FOnHoverProperty<CSSProperties>;
	/** Class name of the tabs button. */
	className?: FOnHoverProperty<string>;
	/** Properties of the label. */
	labelProps?: FTextProps;
}
