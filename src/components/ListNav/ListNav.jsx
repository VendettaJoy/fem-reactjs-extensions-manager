import Button from "../UI/Button/Button";

const ListNav = ({ filterAll, filterActive, filterInactive }) => {
	return (
		<div>
			<h1>Extensions List</h1>
			<Button label="All" onClick={filterAll} />
			<Button label="Active" onClick={filterActive} />
			<Button label="Inactive" onClick={filterInactive} />
		</div>
	);
};
export default ListNav;
