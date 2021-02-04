import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { Main } from './components/pages/Main';
import { About } from './components/pages/About';

const App = () => (
    <div>
       <Router>
        <Link to="/">Main</Link><br />
        <Link to="/about">About</Link><br />
        <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/about' component={About} />
        </Switch>
       </Router>
    </div>
)

ReactDOM.render(<App />, document.getElementById('main'));