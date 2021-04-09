import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    transactions: []
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.GET_ALL_TRANSACTIONS:
            return updateObject(state, {
                transactions: action.data
            });
        default:
            return state;
    }
}
 
export default reducer;