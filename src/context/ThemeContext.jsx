import { useState, createContext } from "react";

export const ThemeCtx = createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
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
