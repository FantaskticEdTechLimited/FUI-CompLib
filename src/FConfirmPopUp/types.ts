import { FBottomNavBarProps, PropsWithCustomStyle } from "..";
import { FPopUpProps } from "../FPopUp/types";
import { FTextProps } from "../FText/types";

export type FConfirmPopUpProps = FPopUpProps & {
	/** Title in the header of the popup. */
	title: string;
	/** Subtitle in the header of the popup. */
	subtitle?: string;
	/** If `true`, the bottom nav bar will be removed.
	 *
	 * When using with `<FForm />`, the bottom bar **should** be removed.
	 */
	disableBottomBar?: boolean;
	/** Properties of the default bottom bar. */
	bottomBarProps?: FBottomNavBarProps;
	/** Properties of the title. */
	titleProps?: FTextProps;
	/** Properties of the subtitle. */
	subtitleProps?: FTextProps;
	/** Style of the header div of the popup. */
	headerStyle?: PropsWithCustomStyle["style"];
	/** Class name of the header div of the popup. */
	headerClassName?: PropsWithCustomStyle["className"];
};
