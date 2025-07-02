const Button = ({ type = "button", label = "", onClick = () => {}, ariaLabel }) => {
	return (
		<button type={type} onClick={onClick} aria-label={ariaLabel}>
			{label}
		</button>
	);
};
export default Button;
