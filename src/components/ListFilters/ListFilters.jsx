import Button from "../UI/Button/Button";
import classes from "./listFilters.module.css"

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
		<div className={classes.wrapper}>
			<h1 className={classes.heading}>Extensions List</h1>
			<div className={classes.filters}>
                {filters.map((filter, index) => (
                    <>
                        <Button
                            index={index}
                            activeIndex={activeIndex}
                            label={filter.label}
                            onClick={() => filter.filterFunc(index)}
                            ariaLabel={filter.ariaLabel}
                        />
                    </>
                ))}
            </div>
		</div>
	);
};
export default ListFilters;
