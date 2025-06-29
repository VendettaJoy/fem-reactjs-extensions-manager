import { useContext, useState } from "react";
import { ThemeCtx } from "./context/ThemeContext";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import data from "./data.json";
import ListNav from "./components/ListNav/ListNav";

const App = () => {
	const [list, setList] = useState(data);
	const [filteredList, setFilteredList] = useState(list);

	const { theme } = useContext(ThemeCtx);

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

	const handleDelete = (item) => {
		setList(list.filter((el) => el.name !== item.name));
		setFilteredList(filteredList.filter((el) => el.name !== item.name));
	};

	const handleToggle = (e, item) => {
		const button = e.target;
		const pressed = button.getAttribute("aria-pressed") === "true";
		button.setAttribute("aria-pressed", !pressed);

		setList((list) =>
			list.map((el) =>
				el.name === item.name ? { ...el, isActive: !el.isActive } : el
			)
		);
	};

	return (
		<div className="App" data-theme={theme}>
			<Header />
			<main>
				<ListNav
					filterAll={filterAll}
					filterActive={filterActive}
					filterInactive={filterInactive}
				/>
				<List
					list={filteredList}
					onDelete={handleDelete}
					onToggle={handleToggle}
				/>
			</main>
		</div>
	);
};
export default App;
