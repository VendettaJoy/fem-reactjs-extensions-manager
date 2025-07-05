import classes from "./toggle.module.css";

const Toggle = ({ isActive, onClick, ariaLabel }) => {
	return (
		<>
			<button
				type="button"
				className={classes.toggle}
				onClick={onClick}
				aria-label={ariaLabel}
				aria-pressed={isActive}
			>
            </button>
		</>
	);
};
export default Toggle;
