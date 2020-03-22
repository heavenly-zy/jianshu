import * as actionType from './actionType';

const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  if (action.type === actionType.SEARCH_FOCUS) {
    return {
      focused: true
    }
  }
  if (action.type === actionType.SEARCH_BLUR) {
    return {
      focused: false
    }
  }
  return state;
}