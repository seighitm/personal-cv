import {Route, Switch} from 'react-router-dom'
import Home from "./pages/Home/Home";
import './App.css'
import React, {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Education from "./pages/Education/Education";

function App() {
    const itemsNavbar = ["about", "skills", "education", "services", "contact"]
    const icons = ['bxs-user-circle', 'bxs-network-chart', 'bxs-book-bookmark', 'bxs-server', 'bxs-contact']
    const [activeItem, setActiveItem] = useState(0)

    const onSelectedCategory = React.useCallback((index) => {
        setActiveItem(index)
    }, []);

    return (
        <div>
            <Navbar icons={icons} activeItem={activeItem} setActiveItem={onSelectedCategory} itemsNavbar={itemsNavbar}/>
            <div className='infoScreen'>
                <Switch>
                    <Route path='/' component={Home}/>
                    <Route path='/education' component={Education} exact/>
                </Switch>
            </div>

        </div>
    );
}

export default App;
