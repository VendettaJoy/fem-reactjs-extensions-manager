import Button from "../UI/Button/Button";

const ListFilters = ({ filterAll, filterActive, filterInactive }) => {
	const showAllLabel = (
		<>
			<span className="sr-only">Show</span> All{" "}
			<span className="sr-only">Extensions</span>
		</>
	);
	const showActiveLabel = (
		<>
			<span className="sr-only">Show</span> Active{" "}
			<span className="sr-only">Extensions</span>
		</>
	);
	const showInactiveLabel = (
		<>
			<span className="sr-only">Show</span> Inactive{" "}
			<span className="sr-only">Extensions</span>
		</>
	);

	return (
		<div>
			<h1>Extensions List</h1>
			<Button label={showAllLabel} onClick={filterAll} />
			<Button label={showActiveLabel} onClick={filterActive} />
			<Button label={showInactiveLabel} onClick={filterInactive} />
		</div>
	);
};
export default ListFilters;
