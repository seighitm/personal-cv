import {Route, Switch} from 'react-router-dom'
import Home from "./pages/Home/Home";
import AboutMe from "./pages/About/AboutMe";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import React, {useState} from "react";
function App() {
    const itemsNavbar = ["about", "skills", "education", "services","contact"]
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
                    <Route path='/about' component={AboutMe} exact/>
                    <Route path='/skills' component={Skills} exact/>
                    <Route path='/education' component={Education} exact/>
                    <Route path='/services' component={Services} exact/>
                    <Route path='/contact' component={Contact} exact/>
                    <Route path='/' component={Home}/>
                </Switch>
            </div>
        </div>
    );
}



export default App;
