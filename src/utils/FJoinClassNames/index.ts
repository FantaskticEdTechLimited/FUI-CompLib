import { HTMLAttributes } from "react";

type ClassName = HTMLAttributes<any>["className"];

export const FJoinClassNames = (classNames: ClassName[]) => {
	return classNames.join(" ");
};
