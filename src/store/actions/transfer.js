import axios from 'axios';
import * as actionTypes from '../actions/actionTypes';

export const addSender = (data) => {
    return {
        type: actionTypes.ADD_SENDER,
        data: data
    }
}