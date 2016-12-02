import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function genreReducer(state = initialState.genres, action) {
    switch (action.type) {
        case types.LOAD_GENRE_SUCCESS:
            return action.genres;
        default:
            return state;
    }
}