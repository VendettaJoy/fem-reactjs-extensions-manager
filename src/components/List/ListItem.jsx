import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Toggle from "../UI/Toggle/Toggle";

const ListItem = ({ item, onDelete, onToggle }) => {
	const label = (
		<>
			Remove <span className="sr-only">{item.name} Extension</span>
		</>
	);

	return (
		<Card>
			<li>
				<img src={item.logo} alt="" />
				<h2>{item.name}</h2>
				<p>{item.description}</p>
				<Button label={label} onClick={() => onDelete(item)} />
				<Toggle
					isActive={item.isActive}
					onClick={(e) => onToggle(e, item)}
					ariaLabel={`Toggle ${item.name} Extension`}
				/>
			</li>
		</Card>
	);
};
export default ListItem;
