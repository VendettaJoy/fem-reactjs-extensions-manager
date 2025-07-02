import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Toggle from "../UI/Toggle/Toggle";

const ListItem = ({ item, onDelete, onToggle }) => {
	return (
		<li>
			<Card>
				<img src={item.logo} alt="" />
				<h2>{item.name}</h2>
				<p>{item.description}</p>
				<Button
					label="Remove"
					onClick={() => onDelete(item)}
					ariaLabel={`Remove ${item.name} Extension`}
				/>
				<Toggle
					isActive={item.isActive}
					onClick={(e) => onToggle(e, item)}
					ariaLabel={`Toggle ${item.name} Extension`}
				/>
			</Card>
		</li>
	);
};
export default ListItem;
