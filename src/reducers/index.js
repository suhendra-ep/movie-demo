import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import genres from './genreReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  genres,
  ajaxCallsInProgress
});

export default rootReducer;
