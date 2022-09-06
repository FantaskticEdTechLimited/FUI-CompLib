/**
 * Check the default setting of browser is in dark mode or not.
 *
 * It will return true if it is defaultly dark mode.
 */
export const FCheckDefaultIsDarkMode = () => {
	const prefersDark =
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches;

	const storedTheme = localStorage.getItem("theme");

	const defaultIsDarkMode =
		storedTheme === "dark" || (storedTheme === null && prefersDark);

	return defaultIsDarkMode;
};
