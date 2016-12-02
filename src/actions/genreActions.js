import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import genreApi from '../api/genreApi';


export function loadGenreSuccess(genres) {
  return { type: types.LOAD_GENRE_SUCCESS, genres};
}

export function loadGenres() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    
    return genreApi.fetchGenres().then(genres => {
        dispatch(loadGenreSuccess(genres));
    }).catch(error => {
        throw(error);
    });
  };
}