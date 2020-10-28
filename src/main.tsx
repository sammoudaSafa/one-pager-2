import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './home';
import { PersonList } from './personList';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/personList' component={PersonList} />
        </Switch>
    </Router>
    , document.getElementById('coreContainer'));
