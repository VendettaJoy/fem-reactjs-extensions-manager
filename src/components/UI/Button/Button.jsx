import classes from "./button.module.css";

const Button = ({
	type = "button",
	index,
	activeIndex = 0,
	label = "",
	onClick = () => {},
	ariaLabel,
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`${classes.button} ${
				activeIndex === index ? classes.active : ""
			}`}
			aria-label={ariaLabel}
		>
			{label}
		</button>
	);
};
export default Button;
