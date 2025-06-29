import { useContext } from "react";
import { ThemeCtx } from "../../context/ThemeContext";
import Logo from "./Logo";
import Moon from "../../assets/images/icon-moon.svg";
import Sun from "../../assets/images/icon-sun.svg";

const Header = () => {
	const { theme, toggleTheme } = useContext(ThemeCtx);

	return (
		<header>
			<Logo />
			<button type="button" onClick={toggleTheme}>
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
