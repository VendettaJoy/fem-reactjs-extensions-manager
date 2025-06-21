const Button = ({ type = "button", label = "", onClick = () => {} }) => {
	return (
		<button type={type} onClick={onClick}>
			{label}
		</button>
	);
};
export default Button;
