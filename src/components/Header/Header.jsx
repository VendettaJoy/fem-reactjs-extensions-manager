import { useContext } from "react";
import { ThemeCtx } from "../../context/ThemeContext";
import Logo from "./Logo";
import Moon from "../../assets/images/icon-moon.svg";
import Sun from "../../assets/images/icon-sun.svg";
import classes from "./header.module.css"

const Header = () => {
	const { theme, toggleTheme } = useContext(ThemeCtx);
	const isDark = theme === "light" ? false : true;

	return (
		<header className={classes.header}>
			<Logo />
			<button
				type="button"
				onClick={toggleTheme}
                className={classes.themeToggle}
				aria-label="Toggle Dark Mode"
				aria-pressed={isDark}
			>
				<img
					src={theme === "light" ? Moon : Sun}
					alt="Theme Toggle Icon"
					aria-hidden="true"
				/>
			</button>
		</header>
	);
};
export default Header;
