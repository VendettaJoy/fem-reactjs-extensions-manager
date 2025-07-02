import Button from "../UI/Button/Button";

const ListFilters = ({
	activeIndex,
	filterAll,
	filterActive,
	filterInactive,
}) => {
	const filters = [
		{
			label: "All",
			filterFunc: filterAll,
			ariaLabel: "Show All Extensions",
		},
		{
			label: "Active",
			filterFunc: filterActive,
			ariaLabel: "Show Active Extensions",
		},
		{
			label: "Inactive",
			filterFunc: filterInactive,
			ariaLabel: "Show Inactive Extensions",
		},
	];

	return (
		<div>
			<h1>Extensions List</h1>
			<ul aria-label="Extensions List Filters">
				{filters.map((filter, index) => (
					<li key={index}>
						<Button
							index={index}
							activeIndex={activeIndex}
							label={filter.label}
							onClick={() => filter.filterFunc(index)}
							ariaLabel={filter.ariaLabel}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};
export default ListFilters;
