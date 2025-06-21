import ListItem from "./ListItem";

const List = ({ list, onDelete, onToggle }) => {
	return (
		<ul>
			{list.map((item) => (
				<ListItem
					key={item.name}
					item={item}
					onDelete={onDelete}
					onToggle={onToggle}
				/>
			))}
		</ul>
	);
};
export default List;
