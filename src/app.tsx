import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { Main } from './components/pages/Main';
import { About } from './components/pages/About';
import { Hooks } from './components/pages/Hooks';
import { Form } from './components/pages/Form';

const App = () => (
    <div>
       <Router>
        <Link to="/">Main</Link><br />
        <Link to="/about">About</Link><br />
        <Link to="/hooks">Hooks</Link><br />
        <Link to="/form">Form</Link><br />
        <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/about' component={About} />
            <Route exact path='/hooks' component={Hooks} />
            <Route exact path='/form' component={Form} />
        </Switch>
       </Router>
    </div>
)

ReactDOM.render(<App />, document.getElementById('main'));