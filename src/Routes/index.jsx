import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import MessageForm from '../pages/MessageForm';
import Messages from '../pages/Messages';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Dashboard />
            </Route>
            <Route path="/mensagens" exact>
                <Messages />
            </Route>
            <Route path="/mensagens/nova_mensagem">
                <MessageForm />
            </Route>
        </Switch>
    )
}

export default Routes;


