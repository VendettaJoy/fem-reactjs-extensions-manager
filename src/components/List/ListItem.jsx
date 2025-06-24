import Button from "../UI/Button/Button";
import Toggle from "../UI/Toggle/Toggle";

const ListItem = ({ item, onDelete, onToggle }) => {
	return (
		<li>
			<img src={item.logo} alt="" />
			<h2>{item.name}</h2>
			<p>{item.description}</p>
			<Button label="Remove" onClick={() => onDelete(item)} />
            <Toggle name={`${item.name}-extension`} isActive={item.isActive} onClick={(e) => onToggle(e, item)}/>
		</li>
	);
};
export default ListItem;
