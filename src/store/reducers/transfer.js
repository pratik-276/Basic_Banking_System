import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    sender: {
        username: "",
        email: "",
        mobileNumber: "",
        currentBalance: ""
    },
    receiver: {
        username: "",
        email: "",
        mobileNumber: "",
        currentBalance: ""
    }
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_SENDER:
            return updateObject(state, {
                sender: {
                    username: action.data.username,
                    email: action.data.email,
                    mobileNumber: action.data.mobileNumber,
                    currentBalance: action.data.currentBalance
                }
            })
        default:
            return state
    }
}

export default reducer;