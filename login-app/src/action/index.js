import axios from 'axios'
import {AUTH_USER, AUTH_ERROR} from './types';



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
}