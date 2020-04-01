import { fromJS } from 'immutable';
import * as actionType from './actionType';

const defaultState = fromJS({
  loginStatus: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_LOGIN:
      return state.set('loginStatus', action.loginStatus);
    case actionType.LOGOUT:
      return state.set('loginStatus', action.loginStatus);
    default:
      return state;
  }
}