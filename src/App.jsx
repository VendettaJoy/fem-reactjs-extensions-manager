import { useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import data from "./data.json"

const App = () => {
    const [list, setList] = useState(data);

    const handleDelete = (item) => {
        setList((list) => list.filter((el) => el.name !== item.name))
    }

    const handleToggle = (item) => {
        setList((list) => list.map((el) => el.name === item.name ? {...el, isActive: !el.isActive} : el))
    }

    console.log(list.map((el) => el.isActive))
	return (
        <>
            <Header />
            <main>
                <List list={list} onDelete={handleDelete} onToggle={handleToggle} />
            </main>
        </>
    )
};
export default App;
