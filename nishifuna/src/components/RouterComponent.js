import React, { Component } from 'react'
import Eat from './EatComponent';
import Drink from './DrinkComponent';
import MainBody from './MainBody';
import About from './AboutComponent';
import Fun from './PlayComponent';
import { Route, Switch,} from 'react-router'

function Router() {
    const HomePage = () => {
        return (
            <div>
                <MainBody />
            </div>
        );
    }
        return (
            <React.Fragment>
                <Switch>

                    <Route path='/home' component={HomePage} />
                    <Route path="/eat" component={Eat} />
                    <Route path="/drink" component={Drink} />
                    <Route path="/play" component={Fun} />
                    <Route path="/about" component={About} />
                </Switch>
            </React.Fragment>
        );
}

export default Router;
