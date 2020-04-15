import {
    SET_SEARCH_RESULT_MOVIES,
    SET_SEARCH_RESULT_WORD,
    SET_SEARCH_RESULT_TYPE,
    LOADING_UI,
    UNLOADING_UI,
    SET_ERRORS,
} from '../types'

import axios from 'axios';

export const searchByKeyword = (id,name,history) => (dispatch) => {
    let data;
    dispatch({type: LOADING_UI});
    history.push(`/search`);
    window.scrollTo(0, 0);
    axios.get(`https://api.themoviedb.org/3/keyword/${id}/movies`,{
        params:{
            api_key: process.env.REACT_APP_DEV_API_KEY,
            language: "ja-JA",
        }
    })
    .then(res => {
        data = res.data.results;
        dispatch({
            type: SET_SEARCH_RESULT_MOVIES,
            payload: data
        });
        dispatch({
            type: SET_SEARCH_RESULT_TYPE,
            payload: "keyword"
        });
        dispatch({
            type: SET_SEARCH_RESULT_WORD,
            payload: name
        });
        return null;
    })
    .then(() => {
        dispatch({type: UNLOADING_UI});
        return null;
    })
    .catch((err) => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
          });
    })
}

export const searchByWord = (keyword,history) => (dispatch) => {
    let data;
    dispatch({type: LOADING_UI});
    history.push(`/search`);
    window.scrollTo(0, 0);
    axios.get(`https://api.themoviedb.org/3/search/movie`,{
            params: {
                api_key: process.env.REACT_APP_DEV_API_KEY,
                language: "ja-JA",
                query: keyword,
                page: 1,
        }
    })
    .then(res => {
        data = res.data.results;
        dispatch({
            type: SET_SEARCH_RESULT_MOVIES,
            payload: data
        });
        dispatch({
            type: SET_SEARCH_RESULT_TYPE,
            payload: "word"
        });
        dispatch({
            type: SET_SEARCH_RESULT_WORD,
            payload: keyword
        });
        return null;
    })
    .then(() => {
        dispatch({type: UNLOADING_UI});
        return null;
    })
    .catch((err) => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
          });
    })
}

export const searchByPeople = (id,name,history) => (dispatch) => {
    let data;
    dispatch({type: LOADING_UI});
    history.push(`/search`);
    window.scrollTo(0, 0);
    axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits`,{
            params: {
                api_key: process.env.REACT_APP_DEV_API_KEY,
                language: "ja-JA",
        }
    })
    .then(res => {
        data = res.data.cast;
        dispatch({
            type: SET_SEARCH_RESULT_MOVIES,
            payload: data
        });
        dispatch({
            type: SET_SEARCH_RESULT_TYPE,
            payload: "people"
        });
        dispatch({
            type: SET_SEARCH_RESULT_WORD,
            payload: name
        });
        return null;
    })
    .then(() => {
        dispatch({type: UNLOADING_UI});
        return null;
    })
    .catch((err) => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
          });
    })
}