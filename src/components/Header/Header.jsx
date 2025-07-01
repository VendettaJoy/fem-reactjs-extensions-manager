import { useContext } from "react";
import { ThemeCtx } from "../../context/ThemeContext";
import Logo from "./Logo";
import Moon from "../../assets/images/icon-moon.svg";
import Sun from "../../assets/images/icon-sun.svg";

const Header = () => {
	const { theme, toggleTheme } = useContext(ThemeCtx);
	const isDark = theme === "light" ? false : true;

	return (
		<header>
			<Logo />
			<button
				type="button"
				onClick={toggleTheme}
				aria-label="Toggle Dark Mode"
				aria-pressed={isDark}
			>
				<img
					src={theme === "light" ? Moon : Sun}
					alt="Theme Icon"
					aria-hidden="true"
				/>
			</button>
		</header>
	);
};
export default Header;
