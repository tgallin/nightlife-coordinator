import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import user from '../reducers/user';
import topic from '../reducers/topic';
import message from '../reducers/message';
import bar from '../reducers/bar';
import * as types from '../types';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.CREATE_REQUEST:
    case types.REQUEST_BARS:
      return true;
    case types.REQUEST_SUCCESS:
    case types.REQUEST_FAILURE:
    case types.REQUEST_BARS_SUCCESS:
    case types.REQUEST_BARS_FAILURE:
      return false;
    default:
      return state;
  }
};

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  isFetching,
  topic,
  bar,
  user,
  message,
  routing
});

export default rootReducer;
