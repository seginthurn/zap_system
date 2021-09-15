import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

import { Dashboard, Messages } from "../pages";


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Dashboard />
            </Route>
            <Route path="/messages">
                <Messages/>
            </Route>
        </Switch>
    );
}

export default Routes;