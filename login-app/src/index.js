import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import {BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import reduxThunk  from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import reducers from './reducers';
import Feature from './components/Feature';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';
import Pokemon from './components/Pokemon';


const store = createStore(reducers, {
    auth:{authenticated:localStorage.getItem('myToken')}
}, applyMiddleware(reduxThunk))


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome} />
                <Route path="/signup" component={Signup} />
                <Route path="/feature" component={Feature} />
                <Route path="/signout" component={Signout} />
                <Route path="/signin" component={Signin} />
                <Route exact path={`/pokemon/:id`} component={Pokemon} />
            </App>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
)