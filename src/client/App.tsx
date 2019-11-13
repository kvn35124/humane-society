import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Statistics from './Pages/Statistics';
import Stories from './Pages/Stories';
import Donation from './Pages/Donation';

const App = () => {

    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/statistics" component={Statistics} />
                <Route exact path="/stories" component={Stories} />
                <Route exact path="/donation" component={Donation} />
            </Switch>
        </Router>
    )
}

export default App;