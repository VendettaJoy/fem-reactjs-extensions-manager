import classes from "./toggle.module.css";

const Toggle = ({ isActive, onClick, ariaLabel }) => {
	return (
		<>
			<button
				type="button"
				className={classes.button}
				onClick={onClick}
				aria-label={ariaLabel}
				aria-pressed={isActive}
			>
                <span className={classes.toggle} aria-hidden="true"></span>
            </button>
		</>
	);
};
export default Toggle;
