import { combineReducers } from "redux";
import {reducer as formReducer } from 'redux-form';

import auth from './auth';
import dataList from './dataList'
import pokemonsAbility from "./pokemonsAbility";

export default combineReducers({
    auth,
    form: formReducer,
    dataList,
    ability:pokemonsAbility
})