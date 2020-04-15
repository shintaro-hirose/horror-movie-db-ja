import {
    SET_SEARCH_RESULT_MOVIES,
    SET_SEARCH_RESULT_TYPE,
    SET_SEARCH_RESULT_WORD,
} from '../types'

const initialState = {
    searchResultMovies: null,
    searchResultType: null,
    searchResultWord: null,
}

export default function(state=initialState, action){
    switch(action.type){
        case SET_SEARCH_RESULT_MOVIES:
            return {
                ...state,
                searchResultMovies: action.payload,
            };
        case SET_SEARCH_RESULT_TYPE:
            return {
                ...state,
                searchResultType: action.payload,
            };
        case SET_SEARCH_RESULT_WORD:
            return {
                ...state,
                searchResultWord: action.payload,
            };
        default:
            return state;
    }
}