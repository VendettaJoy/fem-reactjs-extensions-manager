const ListItem = ({ item, onDelete, onToggle }) => {
	return (
		<li key={item.name}>
			<img src={item.logo} alt="" />
			<h2>{item.name}</h2>
			<p>{item.description}</p>

			<button type="button" onClick={() => onDelete(item)}>
				Remove
			</button>
			<label htmlFor={item.name}>Toggle Extension</label>
			<input
				type="checkbox"
				name={item.name}
				id={item.name}
				defaultChecked={item.isActive}
				onChange={() => onToggle(item)}
				aria-label={`Toggle ${item.name}`}
			/>
		</li>
	);
};
export default ListItem;
