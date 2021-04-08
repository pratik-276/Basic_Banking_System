import axios from 'axios';
import * as actionTypes from '../actions/actionTypes';
import {toast} from 'react-toastify';

export const addSender = (data) => {
    toast.success("Sender selected");
    return {
        type: actionTypes.ADD_SENDER,
        data: data
    }
}

export const addReceiver = (data) => {
    toast.success("Receiver selected");
    return {
        type: actionTypes.ADD_RECEIVER,
        data: data
    }
}

// const updateTransfer = () => {
//     return {
//         type: actionTypes.TRANSFER_SUCCESS
//     }
// }

const updateReceiver = rData => {
    return dispatch => {
        axios.put("users/"+rData.id+".json", rData)
            .then(response => {
                toast.success("Transfer Succesful");
            }).catch(err => {
                console.log(err);
            })
    }
}

export const updateBalances = (sData, rData) => {
    return dispatch => {
        axios.put("users/"+sData.id+".json", sData)
            .then(response => {
                // dispatch(updateTransfer());
                dispatch(updateReceiver(rData));
            }).catch(err => {
                console.log(err);
            })
    }
}