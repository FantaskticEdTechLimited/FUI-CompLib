import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const FLinkButtonHandler = () => {
	const location = useLocation();
	const [isHome, setIsHome] = useState<boolean>(false);

	useEffect(() => {
		if (location.pathname === "/") {
			location.pathname = "/home";
			setIsHome(true);
		} else setIsHome(false);
	}, [location]);

	return isHome;
};