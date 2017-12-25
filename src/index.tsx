import * as React from 'react';
import { render } from 'react-dom';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom';

import reducers from './stores/reducers';
import Home from './pages/home';


class App extends React.Component {
    render() {
        const store = createStore(reducers);
        return (
            <Provider store={store}>
                <HashRouter>
                    <div>
                        <ul>
                            <li><NavLink to="/index" replace>home</NavLink></li>
                        </ul>
                        <Switch>
                            <Route exact path='/index' component={Home}></Route>
                            <Redirect to="/index" />
                        </Switch>
                    </div>
                </HashRouter>
            </Provider>
        );
    }
}

render(
    <App />,
    document.getElementById('app')
);
