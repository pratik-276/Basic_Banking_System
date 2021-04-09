import axios from 'axios';
import * as actionTypes from '../actions/actionTypes';

const addAllTransactions = (data) => {
    return {
        type: actionTypes.GET_ALL_TRANSACTIONS,
        data: data
    }
}

export const getTransactions = () => {
    return dispatch => {
        axios.get("transactions.json").then(response => {
            dispatch(addAllTransactions(response.data));
        }).catch(error => {
            console.log(error);
        })
    }
}

export const addTransaction = (data) => {
    return dispatch => {
        axios.post("transactions.json", data).then(response => {
            console.log(response.data);
        }).catch(err => {
            console.log(err);
        })
    }
}