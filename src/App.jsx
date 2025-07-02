import { useContext, useState } from "react";
import { ThemeCtx } from "./context/ThemeContext";
import Header from "./components/Header/Header";
import ListFilters from "./components/ListFilters/ListFilters";
import List from "./components/List/List";
import data from "./data.json";
import "./App.css"

const App = () => {
    const [activeIndex, setActiveIndex] = useState(0);

	const [list, setList] = useState(data);
	const [filteredList, setFilteredList] = useState(list);

	const { theme } = useContext(ThemeCtx);

    const handleButtonState = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

	const filterAll = (index) => {
        handleButtonState(index);

		const allExtensions = list.slice();
		setFilteredList(allExtensions);
	};

	const filterActive = (index) => {
        handleButtonState(index);

		const activeExtensions = list.filter((el) => el.isActive === true);
		setFilteredList(activeExtensions);
	};

	const filterInactive = (index) => {
        handleButtonState(index);

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
				<ListFilters
                    activeIndex={activeIndex}
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
