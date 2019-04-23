import axios from 'axios'
import {AUTH_USER, AUTH_ERROR, FETCH_DATA, LOAD_ERROR, ONE_ABILITY} from './types';



export const signup = (formProps, cb) => async dispatch =>  {
    try{
        const response = await axios.post('http://localhost:8080/signup', formProps);
        dispatch({
            type:AUTH_USER,
            payload:response.data.token
        });
        localStorage.setItem('myToken', response.data.token)
        cb();
    } catch(eror) {
        dispatch({
            type:AUTH_ERROR,
            payload:eror.message
        });
    }
}

export const signout = () => {
    localStorage.removeItem('myToken');

    return {
        type:AUTH_USER,
        payload:''
    }
}

export const signin = (formProps, cb) => async dispatch =>  {
    try{
        const response = await axios.post('http://localhost:8080/signin', formProps);
        dispatch({
            type:AUTH_USER,
            payload:response.data.token
        });
        localStorage.setItem('myToken', response.data.token)
        cb();
    } catch(eror) {
        dispatch({
            type:AUTH_ERROR,
            payload:'Invalid Credentials'
        });
    }
};

export const showList = () => async dispatch => {
    const config = {
        headers:{
            "Authorization":localStorage.getItem("myToken")
        }
    }
    try {
        const response = await axios.get('http://localhost:8080',config);
        dispatch({
            type:FETCH_DATA,
            payload:response.data
        })

    } catch(error){
        dispatch({
            type:LOAD_ERROR,
            payload:error
        })
    }
};

export const getOneAbility = (id) => async dispatch => {
    const config = {
        headers:{
            "Authorization":localStorage.getItem("myToken")
        }
    }
    try {
        const response = await axios.get(`http://localhost:8080/ability/${id}`,config);
        dispatch({
            type:ONE_ABILITY,
            payload:response.data
        })
    } catch (error) {
        dispatch({
            type:LOAD_ERROR,
            payload:error
        })
    }
}