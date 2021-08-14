import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Home from '../Home';
import Login from '../Login';
import NotFound from '../NotFound';
import SignUp from '../SignUp';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/notfound" component={NotFound} />
                <Redirect to="/notfound" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
