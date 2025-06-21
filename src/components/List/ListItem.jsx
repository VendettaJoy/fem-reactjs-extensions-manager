import Button from "../UI/Button/Button";

const ListItem = ({ item, onDelete, onToggle }) => {
	return (
		<li>
			<img src={item.logo} alt="" />
			<h2>{item.name}</h2>
			<p>{item.description}</p>

			{/* <button type="button" onClick={() => onDelete(item)}>
				Remove
			</button> */}
			<Button label="Remove" onClick={() => onDelete(item)} />
			<label htmlFor={item.name}>Toggle Extension</label>
			<input
				type="checkbox"
				name={item.name}
				id={item.name}
				defaultChecked={item.isActive}
				onChange={() => onToggle(item)}
				aria-label={`Toggle Extension ${item.name}`}
                aria-checked={item.isActive}
			/>
		</li>
	);
};
export default ListItem;
