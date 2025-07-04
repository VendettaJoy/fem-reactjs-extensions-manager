import ListItem from "./ListItem";
import classes from "./list.module.css"

const List = ({ list, onDelete, onToggle }) => {
	return (
		<ul className={classes.list}>
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
