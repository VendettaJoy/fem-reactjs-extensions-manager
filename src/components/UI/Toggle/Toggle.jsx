import classes from "./toggle.module.css";

const Toggle = ({ name, isActive, onClick }) => {
	return (
		<>
			<span id={`toggle-${name}`}></span>
			<button
				type="button"
				className={classes.button}
				aria-labelledby={`toggle-${name}`}
				onClick={onClick}
				aria-pressed={isActive}
			>
                <span className={classes.toggle} aria-hidden="true"></span>
            </button>
		</>
	);
};
export default Toggle;
