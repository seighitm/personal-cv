import Navbar from "./components/Navbar/Navbar";
import React, {useState} from "react";
import AppRoutes from "./components/AppRoutes";
import {icons, itemsNavbar} from "./utils/constants";
import './App.css'

const App = () => {
    const [activeItem, setActiveItem] = useState(0)
    const onSelectedCategory = React.useCallback((index) => {
        setActiveItem(index)
    }, []);

    return (
        <>
            <Navbar icons={icons} activeItem={activeItem} setActiveItem={onSelectedCategory} itemsNavbar={itemsNavbar}/>
            <AppRoutes/>
        </>
    );
}

export default App;
