/**
 * Checks the default setting of browser is in _dark_ mode or not.
 *
 * Returns `true` if it is in _dark_ mode.
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
