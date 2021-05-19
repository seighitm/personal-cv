import {Route, Switch} from 'react-router-dom'
import Home from "./pages/Home/Home";
import './App.css'
import React from "react";

function App() {
    return (
        <div className='infoScreen'>
            <Switch>
                <Route path='/' component={Home}/>
            </Switch>
        </div>
    );
}

export default App;
