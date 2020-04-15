import {
    LOADING_UI,
    UNLOADING_UI,
    SET_ERRORS,
} from '../types'

const initialState = {
    loading: false,
    errors: {},
}

export default function(state=initialState, action){
    switch(action.type){
        case LOADING_UI:
            return {
                ...state,
                loading: true
            };
        case UNLOADING_UI:
            return {
                ...state,
                loading: false
            };
        case SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.payload
            };
        default:
            return state;
    }
}