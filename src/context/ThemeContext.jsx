import { createContext } from "react";
import useLocalStorage from "use-local-storage";

export const ThemeCtx = createContext();

const ThemeProvider = ({ children }) => {
	const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
		.matches
		? "dark"
		: "light";
	const [theme, setTheme] = useLocalStorage("theme", preferredTheme);

	const toggleTheme = (e) => {
        const themeToggle = e.target;
        const pressed = themeToggle.getAttribute("aria-pressed") === "true";
        themeToggle.setAttribute("aria-pressed", !pressed);

		// smooth transition
		document.documentElement.classList.add("color-theme-transition");
		window.setTimeout(() => {
			document.documentElement.classList.remove("color-theme-transition");
		});

		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	};

	return (
		<ThemeCtx.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeCtx.Provider>
	);
};
export default ThemeProvider;
