import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Toggle from "../UI/Toggle/Toggle";
import classes from "./listItem.module.css"

const ListItem = ({ item, onDelete, onToggle }) => {
	return (
		<li className={classes.listItem}>
			<Card>
				<div className={classes.info}>
                    <img src={item.logo} alt="" />
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </div>
				<div className={classes.buttons}>
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
                </div>
			</Card>
		</li>
	);
};
export default ListItem;
