import React from "react";
import { FScrollTopHandler } from "../utils/FScrollTopHandler";
import { FScrollableListProps } from "./types";

export const FScrollable = (props: FScrollableListProps) => {
	const { scrollTop, ...scrollProps } = FScrollTopHandler();

	return (
		<div
			{...scrollProps}
			style={{
				height: "100%",
				overflow: "auto",
				boxShadow:
					scrollTop > 0
						? "inset 0 0.175rem 0.25rem rgba(0, 0, 0, 1)"
						: "inset 0 0 0.25rem rgba(0, 0, 0, 0.12)",
				boxSizing: "border-box",
				paddingTop: "0.1rem",
				transition: "padding-top 0.05s ease-in-out",
				border: "10rem",
			}}
		>
			{props.children}
		</div>
	);
};
