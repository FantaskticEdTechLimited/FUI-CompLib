import { CSSProperties, SVGProps } from "react";
import { FOnClickFunction, FOnHoverProperty } from "../global.types";

export type FSwitchButtonCircleProps = Pick<
	SVGProps<SVGCircleElement>,
	"stroke" | "strokeWidth" | "fill" | "cx" | "cy" | "r"
>;

export interface FSwitchButtonProps {
	/** If `true`, the switch button is checked. */
	checked?: boolean;
	/** If `true`, the switch button is **NOT** able to use. */
	disabled?: boolean;
	/** Click action event of the switch button. */
	onClick?: FOnClickFunction;
	/** Class name of the switch button. */
	className?: FOnHoverProperty<string>;
	/** Style of the switch button. */
	style?: FOnHoverProperty<CSSProperties>;
	/** Class name of the svg container. */
	svgClassName?: FOnHoverProperty<string>;
	/** Style of the svg container. */
	svgStyle?: FOnHoverProperty<CSSProperties>;
	/** Properties of the circle icon. */
	circleProps?: FSwitchButtonCircleProps;
}
