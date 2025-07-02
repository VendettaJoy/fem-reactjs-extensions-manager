import Button from "../UI/Button/Button";

const ListFilters = ({ filterAll, filterActive, filterInactive }) => {
	return (
		<div>
			<h1>Extensions List</h1>
			<Button label="All" onClick={filterAll} ariaLabel="Show All Extensions" />
			<Button label="Active" onClick={filterActive} ariaLabel="Show Active Extensions" />
			<Button label="Inactive" onClick={filterInactive} ariaLabel="Show Inactive Extensions" />
		</div>
	);
};
export default ListFilters;
