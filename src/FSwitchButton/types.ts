import { ClassAttributes, SVGProps } from "react";
import {
	PropsWithCustomStyle,
	PropsWithDivRef,
	PropsWithOnClickFunction,
} from "../global.types";

export type FSwitchButtonCircleProps = Pick<
	SVGProps<SVGCircleElement>,
	"stroke" | "strokeWidth" | "fill" | "cx" | "cy" | "r"
>;

export type FSwitchButtonProps = PropsWithDivRef &
	PropsWithCustomStyle &
	PropsWithOnClickFunction & {
		ref?: ClassAttributes<SVGSVGElement>["ref"];
		/** If `true`, the switch button is checked. */
		checked?: boolean;
		/** If `true`, the switch button is **NOT** able to use. */
		disabled?: boolean;
		/** Class name of the svg container. */
		svgClassName?: PropsWithCustomStyle["className"];
		/** Style of the svg container. */
		svgStyle?: PropsWithCustomStyle["style"];
		/** Properties of the circle icon. */
		circleProps?: FSwitchButtonCircleProps;
	};
