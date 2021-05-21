import React from 'react';
import {routes} from "../pages/routes";
import {HOME_ROUTE} from "../utils/constants";
import {Route, Switch, Redirect} from "react-router-dom";

const AppRouter = () => {
    return (
        <div className='infoScreen'>
            <Switch>
                {routes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
                <Redirect to={HOME_ROUTE}/>
            </Switch>
        </div>
    );
};

export default AppRouter;