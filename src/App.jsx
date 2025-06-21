import { useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import data from "./data.json";
import Button from "./components/UI/Button/Button";

const App = () => {
	const [list, setList] = useState(data);
	const [filteredList, setFilteredList] = useState(list);

	const handleDelete = (item) => {
		const updatedList = list.filter((el) => el.name !== item.name);
		setList(updatedList);
		setFilteredList(updatedList);
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
				<Button label="All" onClick={filterAll} />
                <Button label="Active" onClick={filterActive} />
                <Button label="Inactive" onClick={filterInactive} />
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
