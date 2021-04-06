import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    users: [],
    loading: false
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.GET_ALL_USERS:
            return updateObject(state, {users: action.data});
        default:
            return state;
    }
}

export default reducer;