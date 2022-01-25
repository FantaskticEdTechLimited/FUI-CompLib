import { CSSProperties, ReactElement, ReactNode } from "react"; 
import { FButtonProps } from "../FButton/types"; 
 
export interface FTabPanelProps {
	label?: string; 
	children?: ReactNode;
	disabled?: boolean;
	tabButtonProps?: FButtonProps;
}
 
export interface FTabsProps {
	children?: ReactElement<FTabPanelProps> | Array<ReactElement<FTabPanelProps>>;

	// customized tabs by user
	renderCustomizedTabs?: ReactNode;
	tabIndex?: number;

	disabled?: boolean;
	// leading components in the header container
	leadingComponents?: ReactNode;
	// action components in the header container
	actionComponents?: ReactNode; 

	// css style of FTabs wrapper
	wrapperClassName?: string;
	wrapperStyle?: CSSProperties;

	// css style of FTabs header container
	headerClassName?: string;
	headerStyle?: CSSProperties;

	// css style of FTabs tab container
	tabContainerClassName?: string;
	tabContainerStyle?: CSSProperties; 
}
