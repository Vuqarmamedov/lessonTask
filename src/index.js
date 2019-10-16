import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AllUsers from './AllUsers';
import Details from './Details';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Add from './Add'

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={AllUsers} />
                <Route path="/details/:id" component={Details} />
                <Route path="/post" component={Add} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
