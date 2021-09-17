import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Messages from '../pages/Messages';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Dashboard />
            </Route>
            <Route path="/messages">
                <Messages />
            </Route>
        </Switch>
    )
}

export default Routes;