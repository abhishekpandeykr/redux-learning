import React from 'react';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
// import reduxPromise from 'redux-promise'
import async from 'middlewares/async'
import stateValidator from 'middlewares/stateValidator'
// when we import a directory we will get default index.js file
import reducers from 'reducers'


export default ({children,initialState= {}}) => (
    <Provider store={createStore(reducers, initialState, applyMiddleware(async, stateValidator))}>
        {children}
    </Provider>
)