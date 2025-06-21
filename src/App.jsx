import { useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import data from "./data.json";

const App = () => {
	const [list, setList] = useState(data);
	const [filteredList, setFilteredList] = useState(list);

	const handleDelete = (item) => {
		setList((list) => list.filter((el) => el.name !== item.name));
	};

	const handleToggle = (item) => {
		setList((list) =>
			list.map((el) =>
				el.name === item.name ? { ...el, isActive: !el.isActive } : el
			)
		);
	};

	const filterAll = () => {
		const allExtensions = list;
		setFilteredList(allExtensions);
	};

	const filterActive = () => {
		const activeExtensions = list.filter((el) => el.isActive === true);
		setFilteredList(activeExtensions);
	};

	const filterInactive = () => {
		const inactiveExtensions = list.filter((el) => el.isActive !== true);
		setFilteredList(inactiveExtensions);
	};

	console.log(list.map((el) => el.isActive));
	return (
		<>
			<Header />
			<main>
				<button type="button" onClick={filterAll}>All</button>
				<button type="button" onClick={filterActive}>Active</button>
				<button type="button" onClick={filterInactive}>Inactive</button>
				<List
					list={filteredList}
					onDelete={handleDelete}
					onToggle={handleToggle}
				/>
			</main>
		</>
	);
};
export default App;
