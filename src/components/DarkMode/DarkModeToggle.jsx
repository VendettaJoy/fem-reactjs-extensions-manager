import { useState } from "react";
import Moon from "../../assets/images/icon-moon.svg";
import Sun from "../../assets/images/icon-sun.svg";

const DarkModeToggle = () => {
	const [isDark, setIsDark] = useState(false);

	const setTheme = () => {
		document.documentElement.classList.add("color-theme-transition");
		document.documentElement.classList.toggle("dark-mode");
		window.setTimeout(() => {
			document.documentElement.classList.remove("color-theme-transition");
		}, 1000);
        
		setIsDark(!isDark);
	};

	return (
		<button type="button" aria-label="Toggle theme">
			<img
				src={isDark ? Sun : Moon}
				alt=""
				onClick={setTheme}
				aria-hidden="true"
			/>
		</button>
	);
};
export default DarkModeToggle;
