import Logo from "./Logo"
import Moon from "../../assets/images/icon-moon.svg"
import Sun from "../../assets/images/icon-sun.svg"

const Header = () => {
  return (
    <header>
        <Logo />
        <button type="button">
            <img src={Moon} alt="" />
        </button>
    </header>
  )
}
export default Header