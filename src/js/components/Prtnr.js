import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';


class Prtnr extends Component {
    state = {

    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>   
        )
    }
}

export default Prtnr;