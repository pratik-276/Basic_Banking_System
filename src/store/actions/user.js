import axios from 'axios';
import * as actionTypes from '../actions/actionTypes';

const addAllUsers = (data) => {
    return {
        type: actionTypes.GET_ALL_USERS,
        data: data
    }
}

export const getAllUsers = () => {
    return dispatch => {
        axios.get("users.json").then(response => {
            dispatch(addAllUsers(response.data));
        }).catch(error => {
            console.log(error);
        })
    }
}